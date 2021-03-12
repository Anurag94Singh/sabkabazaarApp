import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { MasterService } from '../../master.service';
import { product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  @Input() categoryId: string = '';

  products: product[] = [];

  constructor(public msService: MasterService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.msService.getProducts()
      .subscribe((data: product[]) => {
        this.products = data;
        let categoryId = this.route.snapshot.queryParams['category'];
        if (categoryId != undefined) {
          this.FilterProductsByCategory(categoryId);
        }
      });

    this.route.queryParams
      .subscribe(
        (params: Params) => {
          let categoryID = params['category'];
          console.log(this.products)
          console.log(categoryID);
          this.FilterProductsByCategory(categoryID);
        }
      )
  }

  FilterProductsByCategory(categoryID: string) {
    this.products.map(pD => {
      pD['visible'] = ((categoryID == pD.category || categoryID == undefined) ? true : false);
    });
    console.log(this.products)
  }

  AddToCart(product : product){
    debugger
    this.msService.addToCart(product.id)
      .subscribe(
        res => {
          console.log(res);
          let itemExist = false;
          let itemCounts = 0;
          this.msService.cartTotal = 0;
          this.msService.cartItems
            .forEach(item => {
              if(item.id === product.id){
                item.itemCount++;
                itemExist = true;
              }
              itemCounts += item.itemCount;
              this.msService.cartTotal += item.price * item.itemCount;
            })
          if(!itemExist){
            let cart : Cart = {...product,itemCount:1};
            this.msService.cartItems.push(cart);
            itemCounts++;
            this.msService.cartTotal += product.price * 1;
          }
          this.msService.cartItemCounts = itemCounts;
          // this.msService.updateCartItem.next(itemCounts);
        },
        err => console.log(err)
      )
  }

  ngOnDestroy() {
    console.log("destroyed!!!")
  }

}
