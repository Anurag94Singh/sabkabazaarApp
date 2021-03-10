import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { CategoriesComponent } from './categories/categories.component';
import { FooterComponent } from './footer/footer.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { ProductsComponent } from './productscontainer/products/products.component';
import { ProductcategoryComponent } from './productscontainer/productcategory/productcategory.component';
import { ProductscontainerComponent } from './productscontainer/productscontainer.component';
import { CategoryComponent } from './categories/category/category.component';

import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';


import { MobileCategoryComponent } from './productscontainer/mobile-category/mobile-category.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { CartComponent } from './cart/cart.component';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HeaderComponent,
    ContainerComponent,
    CategoriesComponent,
    FooterComponent,
    ProductsComponent,
    ProductcategoryComponent,
    ProductscontainerComponent,
    CategoryComponent,
    MobileCategoryComponent,
    SignUpComponent,
    SignInComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    BrowserAnimationsModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatListModule,
    MatSidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
