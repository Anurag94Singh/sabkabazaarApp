import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Banner } from './models/banner.model';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { Observable, Subject } from 'rxjs';
import { Cart } from './models/cart.model';

import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})

export class MasterService {

  openCartSub = new Subject<boolean>();

  updateCartItem = new Subject<number>();

  updateInCartProduct = new Subject<string>();

  toggleBackDrop = new Subject<boolean>();

  cartItemCounts = 0;

  cartTotal = 0;

  cartItems: Cart[] = [];

  IsCartOpen = false;

  constructor(private http: HttpClient) { }

  mainCategories: any = [];

  // rootURL = '/api';

  /* private vars and dont keep any type data */

  private rootURL = environment.apiURL;

  getBanners(): Observable<Banner[]> {
    return this.http.get<Banner[]>(this.rootURL + '/banners');
  }


  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.rootURL + '/categories');
  }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.rootURL + '/products');
  }

  addToCart(productId: string): Observable<{}>{
    return this.http.post<string>(this.rootURL + '/addToCart', {productID: productId});
  }

}
