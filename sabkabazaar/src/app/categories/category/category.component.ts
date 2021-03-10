import { Component, Input, OnInit } from '@angular/core';
import { category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input('categoryData') category : category;

  @Input() isEven : boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
