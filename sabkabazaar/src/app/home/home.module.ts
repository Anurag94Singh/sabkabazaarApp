import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeComponent } from './home.component';
import { CategoryComponent } from './category/category.component';
import { CarousalComponent } from './carousal/carousal.component';
import { HomeRoutingModule } from './home-routing.module';
import { MatCarouselModule } from 'ng-mat-carousel';



@NgModule({
  declarations: [
    HomeComponent,
    CategoryComponent,
    CarousalComponent
  ],
  imports: [
    CommonModule,
    MatCarouselModule.forRoot(),
    HomeRoutingModule
  ]
})
export class HomeModule { }
