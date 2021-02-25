import { Component, OnInit } from '@angular/core';
import { category, MasterService } from '../master.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  categories : string[] = [];

  products : any = []

  constructor(public msService : MasterService) { }

  ngOnInit(): void {
    this.msService.getCategories()
      .subscribe((data: any) => {
        this.categories = data.map((x : category) => x.name)
      });


      this.msService.getProducts()
      .subscribe((data: any) => {
        this.products = data;
      });
  }

}
