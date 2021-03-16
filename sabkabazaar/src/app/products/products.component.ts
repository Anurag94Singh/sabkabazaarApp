import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MasterService } from '../master.service';
import { Category } from '../models/category.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnDestroy {

  categorySelected = '';

  categories: Category[] = [];

  getCategoriesSubscription: Subscription;

  constructor(public msService: MasterService) { }

  ngOnInit(): void {
    this.getCategoriesSubscription = this.msService.getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }

  getCategory(event: string): void{
    console.log(event);
    this.categorySelected = event;
  }

  ngOnDestroy(): void {
    this.getCategoriesSubscription.unsubscribe();
  }
}
