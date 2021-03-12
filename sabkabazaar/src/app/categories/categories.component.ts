import { Component, OnInit } from '@angular/core';

import { MasterService } from '../master.service';

import { category } from '../models/category.model';
import { banner } from '../models/banner.model'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: category[] = [];

  banners: banner[] = [];

  categoriesSubscription : Subscription;

  bannersSubscription : Subscription;

  constructor(private msService: MasterService) { 
  }

  ngOnInit(): void {

    this.categoriesSubscription = this.msService.getCategories()
      .subscribe((data: category[]) => {
        this.categories = data;
        const CATEGRORY_DATA : category[] = this.categories.map(cat => ({
          ...cat,
          key: `Explore  ${cat.key}`
        }));
        this.categories = CATEGRORY_DATA;
        console.log(this.categories);
      });


    this.bannersSubscription = this.msService.getBanners()
      .subscribe((data: banner[]) => {
        this.banners = data;
      });
  }

  ngOnDestroy(){
    this.categoriesSubscription.unsubscribe();
    this.bannersSubscription.unsubscribe()
  }
}
