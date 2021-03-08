import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { banner } from './models/banner.model';
import { category } from './models/category.model';
import { product } from './models/product.model';


@Injectable({
  providedIn: 'root'
})

export class MasterService {

  constructor(private http: HttpClient) { }

  mainCategories : any = []

  rootURL = '/api';

  //rootURL= 'http://localhost:3000'

  getBanners() {
    return this.http.get<banner[]>(this.rootURL + '/banners');
  }


  getCategories() {
    return this.http.get<category[]>(this.rootURL + '/categories');
  }


  getProducts() {
    return this.http.get<product[]>(this.rootURL + '/products');
  }

}
