import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MasterService } from 'src/app/master.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-product-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class ProductCategoryComponent implements OnInit, OnDestroy {

  @Output() categorySelected = new EventEmitter<string>();

  @Input() categories: Category[] = [];

  getCategoriesSubscription: Subscription;

  constructor(public msService: MasterService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCategoriesSubscription = this.msService.getCategories()
      .subscribe((data: Category[]) => {
        this.categories = data;
      });

    this.categorySelected = this.route.snapshot.queryParams.category;
  }

  toggleCategory(id: string): void{
    this.categorySelected.emit(id);
  }

  ngOnDestroy(): void{
    this.getCategoriesSubscription.unsubscribe();
  }

}
