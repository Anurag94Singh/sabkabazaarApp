import { Component, DoCheck, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Cart } from 'src/app/models/cart.model';
import { MasterService } from '../../master.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  @Input() categoryId = '';

  products: Product[] = [];

  getProductsSubscription : Subscription;

  addToCartSubscription : Subscription;

  getQueryParamsSubscription : Subscription;

  constructor(public msService: MasterService, private route: ActivatedRoute) { }


  ngOnInit(): void {

    this.getProductsSubscription = this.msService.getProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
        const categoryId = this.route.snapshot.queryParams.category;
        if (categoryId !== undefined) {
          this.FilterProductsByCategory(categoryId);
        }
      });

    this.getQueryParamsSubscription = this.route.queryParams
      .subscribe(
        (params: Params) => {
          const categoryID = params.category;
          console.log(this.products);
          console.log(categoryID);
          this.FilterProductsByCategory(categoryID);
        }
      );
  }

  FilterProductsByCategory(categoryID: string): void {
    this.products.map(pD => {
      pD.visible = ((categoryID === pD.category || categoryID === undefined) ? true : false);
    });
    console.log(this.products);
  }

  AddToCart(product: Product): void{
    this.addToCartSubscription = this.msService.addToCart(product.id)
      .subscribe(
        res => {
          console.log(res);
          let itemExist = false;
          let itemCounts = 0;
          this.msService.cartTotal = 0;
          this.msService.cartItems
            .forEach(item => {
              if (item.id === product.id){
                item.itemCount++;
                itemExist = true;
              }
              itemCounts += item.itemCount;
              this.msService.cartTotal += item.price * item.itemCount;
            });
          if (!itemExist){
            const cart: Cart = {...product, itemCount: 1};
            this.msService.cartItems.push(cart);
            itemCounts++;
            this.msService.cartTotal += product.price * 1;
          }
          this.msService.cartItemCounts = itemCounts;
          this.addToCartSubscription.unsubscribe();
        },
        err => {
          console.log(err);
          this.addToCartSubscription.unsubscribe();
        }
      );
  }

  ngOnDestroy(): void{
    this.getProductsSubscription.unsubscribe();
    this.getQueryParamsSubscription.unsubscribe();
  }

}
