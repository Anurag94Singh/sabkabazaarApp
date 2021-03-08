import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/app/master.service';
import { category } from 'src/app/models/category.model';

@Component({
  selector: 'app-productcategory',
  templateUrl: './productcategory.component.html',
  styleUrls: ['./productcategory.component.scss']
})
export class ProductcategoryComponent implements OnInit {

  @Output() categorySelected = new EventEmitter<string>();

  @Input() categories : category[] = [];

  constructor(public msService : MasterService, private router : Router) { }

  ngOnInit(): void {
    this.msService.getCategories()
      .subscribe((data: category[]) => {
        this.categories = data;
      });
  }

  ToggleCategory(id : string){
    console.log('category Id : ' + id)
    this.categorySelected.emit(id)
  }

}
