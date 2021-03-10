import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  showFiller = false;

  @ViewChild('drawer') public drawer: MatDrawer;

  constructor(private master : MasterService) { }

  ngOnInit(): void {
    let current = this;
    this.master.openCartSub
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
    if(backDROP && (backDROP.style.display.toLocaleLowerCase() == "none" || backDROP.style.display.toLocaleLowerCase() == "")){
      if(cartSection){
        cartSection.style.zIndex = "1";
      }
      backDROP.style.display = "block"
    }
    else if(backDROP){
      if(cartSection){
        cartSection.style.zIndex = "-1";
      }
      backDROP.style.display = "none"
    }
    this.drawer.toggle()
  }

  ngAfterViewInit(){
    console.log(this.drawer);
  }

}
