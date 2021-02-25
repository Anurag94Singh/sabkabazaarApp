import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

export interface category{
  id : string,
  imageUrl : string,
  name : string,
  key : string,
  description : string,

}


export interface product{
  id : string,
  imageURL : string,
  name : string,
  category : string,
  description : string,
  price : number,
  stock : number,
  sku : string
}


export interface banner{
  id : string,
  bannerImageUrl : string,
  bannerImageAlt : string,
  isActive : boolean,
  order : number
}

@Injectable({
  providedIn: 'root'
})

export class MasterService {

  constructor(private http: HttpClient) { }

  mainCategories : any = []

  rootURL = '/api';

  //rootURL= 'http://localhost:3000'

  getBanners() {
    return this.http.get<banner>(this.rootURL + '/banners');
  }


  getCategories() {
    return this.http.get<category>(this.rootURL + '/categories');
  }


  getProducts() {
    return this.http.get<product>(this.rootURL + '/products');
  }

}
