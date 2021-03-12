import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { MasterService } from '../master.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  showFiller = false;

  @ViewChild('drawer') public drawer: MatDrawer;

  openCartSubscription : Subscription;

  constructor(public master : MasterService) { }

  ngOnInit(): void {
    let current = this;
    this.openCartSubscription = this.master.openCartSub
      .subscribe(
        res => {
          this.ToggleDrawer()
        },
        err => {

        }
      )
  }

  ToggleDrawer(){
    let backDROP = document.getElementById('backDrop');
    let cartSection = document.getElementById('cartSection');
    if(backDROP && !backDROP.classList.contains('smallResBackDrop')){
      if(cartSection){
        cartSection.style.zIndex = "1";
        
      }
      backDROP.classList.add('smallResBackDrop')
      
    }
    else if(backDROP){
      // if(cartSection){
      //   cartSection.style.zIndex = "-1";
      // }
      setTimeout(
        () => {
          if (cartSection) {
            cartSection.style.zIndex = "-1";
          }
        }, 1000)
      backDROP.classList.remove('smallResBackDrop')
    }
    this.drawer.toggle()
  }

  removeItem(item : Cart){
    if(item.itemCount == 1){
      this.master.cartItems = this.master.cartItems.filter(itm => itm.id !== item.id)
    }
    else{
      item.itemCount--;
    }
    this.master.cartItemCounts--;
    this.master.cartTotal -= item.price;
  }

  addItem(item : Cart){
    item.itemCount++;
    this.master.cartItemCounts++;
    this.master.cartTotal += item.price;
  }

  ngOnDestroy(){
    this.openCartSubscription.unsubscribe();
  }



}
