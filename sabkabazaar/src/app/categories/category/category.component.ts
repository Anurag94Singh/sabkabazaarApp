import { Component, Input, OnInit } from '@angular/core';
import { category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input('categoryData') category : category = {id : '', name : '', imageUrl : '', key : '', description : ''};

  @Input() isEven : boolean = true;

  @Input() isOdd : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
