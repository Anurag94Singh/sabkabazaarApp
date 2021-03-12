import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterService } from './master.service';


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sabka Bazaar';

  constructor(public master: MasterService){}

  ngOnInit(): void {
  }


}
