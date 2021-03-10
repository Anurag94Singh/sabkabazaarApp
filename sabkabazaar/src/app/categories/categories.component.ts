import { ChangeDetectorRef, Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { Observable, from, pipe, fromEvent } from 'rxjs';
import { map, filter, tap } from 'rxjs/operators'


import { MasterService } from '../master.service';

import {
  MatCarouselSlideComponent,
  Orientation
} from 'ng-mat-carousel';
import { ThemePalette } from '@angular/material/core';
import { category } from '../models/category.model';
import { banner } from '../models/banner.model'
import { Router } from '@angular/router';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories: category[] = [];

  banners: banner[] = [];



  images: any = [];
  myCarouselImages = [];

  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };


  @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
    MatCarouselSlideComponent
  > | undefined;

  public slidesList = new Array<never>(5);
  public showContent = false;
  public parentHeight = '100%';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color : ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 25;
  public slideHeight = '200px';
  public slides = this.slidesList.length;
  public overlayColor = '#ffffff00';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];
  public darkMode = false;


  constructor(private msService: MasterService, private router : Router) { 
    console.log('form data--->', this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {

    this.msService.getCategories()
      .subscribe((data: category[]) => {
        this.categories = data;
        const CATEGRORY_DATA : category[] = this.categories.map(cat => ({
          ...cat,
          key: `Explore  ${cat.key}`
        }));
        this.categories = CATEGRORY_DATA;
        console.log(this.categories);
        this.msService.mainCategories = this.categories.map((x : category) => x.name)
      });


    this.msService.getBanners()
      .subscribe((data: banner[]) => {
        this.banners = data;
        this.banners.forEach((b: banner) => {
          this.images.push(b.bannerImageUrl.replace('static', 'assets'));
        })
        // console.log(this.banners);
        // console.log(this.images);
      });
  }

  public resetSlides(): void {
    //this.carouselSlides.forEach(item => (item.disabled = false));
  }

  public onChange(index: any) {
    this.log.push(`MatCarousel#change emitted with index ${index}`);
  }
}
