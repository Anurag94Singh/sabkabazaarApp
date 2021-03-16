import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MasterService } from '../master.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {

  showFiller = false;

  @ViewChild('drawer') public drawer: MatDrawer;

  openCartSubscription: Subscription;

  constructor(public master: MasterService) { }

  ngOnInit(): void {
    this.openCartSubscription = this.master.openCartSub
      .subscribe(
        res => {
          this.toggleDrawer();
        },
        (err: Error) => {
          throw new Error(err.message);
        }
      );
  }

  toggleDrawer(): void{
    this.master.IsCartOpen = !this.master.IsCartOpen;
    this.drawer.toggle();
    this.master.toggleBackDrop.next(this.master.IsCartOpen);
  }

  removeItem(item: Cart): void{
    if (item.itemCount === 1){
      this.master.cartItems = this.master.cartItems.filter(itm => itm.id !== item.id);
      this.master.updateInCartProduct.next(item.id);
    }
    else{
      item.itemCount--;
    }
    this.master.cartItemCounts--;
    this.master.cartTotal -= item.price;
  }

  addItem(item: Cart): void{
    item.itemCount++;
    this.master.cartItemCounts++;
    this.master.cartTotal += item.price;
  }

  ngOnDestroy(): void{
    this.openCartSubscription.unsubscribe();
  }



}
