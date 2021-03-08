import { Component, DoCheck, Input, KeyValueDiffer, KeyValueDiffers, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MasterService } from '../../master.service';
import { category } from '../../models/category.model';
import { product } from '../../models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, DoCheck {

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

    // this.route.params
    // .subscribe(
    //   (params : Params) => {
    //     let categoryID = params['cID']; 
    //     console.log(this.products)
    //     if(categoryID != undefined){
    //       console.log(categoryID);
    //       this.FilterProductsByCategory(categoryID);
    //     }
    //   }
    // )
  }

  ngDoCheck() {
    //debugger
    // console.log(this.categoryId);
    // const change = this.differ.diff(this);
    // if (change) {
    //   change.forEachChangedItem(item => {
    //     console.log('item changed', item);
    //   });
    // }
  }

  FilterProductsByCategory(categoryID: string) {
    this.products.map(pD => {
      pD['visible'] = ((categoryID == pD.category || categoryID == undefined) ? true : false);
    });
    console.log(this.products)
  }

  ngOnDestroy() {
    console.log("destroyed!!!")
  }

}
