import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { MasterService } from './master.service';


declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Sabka Bazaar';

  toggleBckDropSub: Subscription;

  isBackDropOpen = false;

  constructor(public master: MasterService){}

  ngOnInit(): void {
    this.toggleBckDropSub = this.master.toggleBackDrop
      .subscribe(
        res => {
          this.isBackDropOpen = res;
        },
        (err: Error) => {
          throw new Error(err.message);
        }
      );
  }

  ngOnDestroy(): void{
    this.toggleBckDropSub.unsubscribe();
  }


}
