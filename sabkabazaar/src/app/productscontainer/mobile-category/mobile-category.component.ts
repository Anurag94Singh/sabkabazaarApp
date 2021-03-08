import { AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MasterService } from 'src/app/master.service';
import { category } from 'src/app/models/category.model';

@Component({
  selector: 'app-mobile-category',
  templateUrl: './mobile-category.component.html',
  styleUrls: ['./mobile-category.component.scss']
})
export class MobileCategoryComponent implements OnInit, AfterContentInit {

  @Input() categories : category[] = [];

  @Output() categorySelected = new EventEmitter<string>();

  // products: product[] = [];

  constructor(public msService: MasterService) { }

  ngAfterContentInit(): void {
    // this.categorySelected.emit('');
    // console.log(this.categorySelected)
  }

  ngOnInit(): void {
    
  }

  ToggleCategory(id : any){
    console.log('category Id : ' + id)
    this.categorySelected.emit(id)
  }


}
