import { Component, OnInit } from '@angular/core';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public master : MasterService) { 
  }

  ngOnInit(): void {
  }

  openCart(){
    this.master.openCartSub.next(true);
  }


}
