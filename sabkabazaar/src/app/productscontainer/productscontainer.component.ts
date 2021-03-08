import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';
import { category } from '../models/category.model';


@Component({
  selector: 'app-productscontainer',
  templateUrl: './productscontainer.component.html',
  styleUrls: ['./productscontainer.component.scss']
})
export class ProductscontainerComponent implements OnInit {

  categorySelected : string = '';

  categories : category[] = [];

  // products: product[] = [];

  constructor(public msService: MasterService) { }

  ngOnInit(): void {
    this.msService.getCategories()
      .subscribe((data: category[]) => {
        this.categories = data;
      });
  }

  getCategory(event : string){
    console.log(event)
    this.categorySelected = event;
  }
}
