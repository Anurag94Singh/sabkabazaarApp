import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';


declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Sabka Bazaar';

  ngOnInit() {
    this.IntervalObservable().subscribe
  }

  IntervalObservable() : Observable<number> {
    let count = 0;
    return new Observable( 
      next => {
        count++;
      }
    )
  }

}
