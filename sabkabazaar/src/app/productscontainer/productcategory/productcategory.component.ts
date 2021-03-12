import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MasterService } from 'src/app/master.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.scss']
})
export class ProductcategoryComponent implements OnInit, OnDestroy {

  @Output() categorySelected = new EventEmitter<string>();

  @Input() categories: Category[] = [];

  getCategoriesSubscription : Subscription;

  constructor(public msService: MasterService, private router: Router) { }

  ngOnInit(): void {
    this.getCategoriesSubscription = this.msService.getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });
  }

  ToggleCategory(id: string): void{
    console.log('category Id : ' + id);
    this.categorySelected.emit(id);
  }

  ngOnDestroy(): void{
    this.getCategoriesSubscription.unsubscribe()
  }

}
