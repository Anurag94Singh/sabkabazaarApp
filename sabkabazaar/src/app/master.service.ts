import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { banner } from './models/banner.model';
import { category } from './models/category.model';
import { product } from './models/product.model';
import { Subject } from 'rxjs';
import { Cart } from './models/cart.model';

import { environment } from '../environments/environment'


@Injectable({
  providedIn: 'root'
})

export class MasterService {

  openCartSub = new Subject<boolean>();

  updateCartItem = new Subject<number>();

  cartItemCounts : number = 0;

  cartTotal : number = 0;

  cartItems : Cart[] = [];

  constructor(private http: HttpClient) { }

  mainCategories : any = []

  //rootURL = '/api';

  /* private vars and dont keep any type data */

  private rootURL= environment.apiURL;

  getBanners() {
    return this.http.get<banner[]>(this.rootURL + '/banners');
  }


  getCategories() {
    return this.http.get<category[]>(this.rootURL + '/categories');
  }


  getProducts() {
    return this.http.get<product[]>(this.rootURL + '/products');
  }

  addToCart(productId : string){
    return this.http.post<string>(this.rootURL + '/addToCart',{productID: productId})
  }

}
