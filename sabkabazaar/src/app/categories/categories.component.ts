import { Component, OnDestroy, OnInit } from '@angular/core';

import { MasterService } from '../master.service';

import { Category } from '../models/category.model';
import { Banner } from '../models/banner.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

  categories: Category[] = [];

  banners: Banner[] = [];

  categoriesSubscription: Subscription;

  bannersSubscription: Subscription;

  constructor(private msService: MasterService) {
  }

  ngOnInit(): void {

    this.categoriesSubscription = this.msService.getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
        const CATEGRORY_DATA: Category[] = this.categories.map(cat => ({
          ...cat,
          key: `Explore  ${cat.key}`
        }));
        this.categories = CATEGRORY_DATA;
        console.log(this.categories);
      });


    this.bannersSubscription = this.msService.getBanners()
      .subscribe((data: Banner[]) => {
        this.banners = data;
      });
  }

  ngOnDestroy(): void{
    this.categoriesSubscription.unsubscribe();
    this.bannersSubscription.unsubscribe();
  }
}
