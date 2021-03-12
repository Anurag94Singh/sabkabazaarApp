import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MasterService } from 'src/app/master.service';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-mobile-category',
  templateUrl: './mobile-category.component.html',
  styleUrls: ['./mobile-category.component.scss']
})
export class MobileCategoryComponent implements OnInit {

  @Input() categories: Category[] = [];

  @Output() categorySelected = new EventEmitter<string>();

  // products: Product[] = [];

  constructor(public msService: MasterService) { }


  ngOnInit(): void {

  }

  ToggleCategory(id: any): void{
    console.log('category Id : ' + id);
    this.categorySelected.emit(id);
  }


}
