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
    const current = this;
    this.openCartSubscription = this.master.openCartSub
      .subscribe(
        res => {
          this.ToggleDrawer();
        },
        err => {

        }
      );
  }

  ToggleDrawer(): void{
    const backDROP = document.getElementById('backDrop');
    const cartSection = document.getElementById('cartSection');
    if (backDROP && !backDROP.classList.contains('smallResBackDrop')){
      this.master.IsCartOpen = true;
      backDROP.classList.add('smallResBackDrop');
    }
    else if (backDROP){
      setTimeout(() => {this.master.IsCartOpen = false;},500)
      backDROP.classList.remove('smallResBackDrop');
    }
    this.drawer.toggle();
  }

  removeItem(item: Cart): void{
    if (item.itemCount === 1){
      this.master.cartItems = this.master.cartItems.filter(itm => itm.id !== item.id);
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
