import { Component, Input, OnChanges, OnInit, QueryList, SimpleChange, SimpleChanges, ViewChildren } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { MatCarouselSlideComponent, Orientation } from 'ng-mat-carousel';
import { Banner } from 'src/app/models/banner.model';

@Component({
  selector: 'app-carousal',
  templateUrl: './carousal.component.html',
  styleUrls: ['./carousal.component.scss']
})
export class CarousalComponent {

  @Input() caraousalData: Banner[] = [];

  images: any = [];
  myCarouselImages = [];

  mySlideOptions = { items: 1, dots: true, nav: true };
  myCarouselOptions = { items: 3, dots: true, nav: true };


  @ViewChildren(MatCarouselSlideComponent) public carouselSlides: QueryList<
    MatCarouselSlideComponent
  > | undefined;

  // public slidesList = new Array<never>();
  public showContent = false;
  public parentHeight = '100%';
  public timings = '250ms ease-in';
  public autoplay = true;
  public interval = 5000;
  public loop = true;
  public hideArrows = false;
  public hideIndicators = false;
  public color: ThemePalette = 'primary';
  public maxWidth = 'auto';
  public maintainAspectRatio = true;
  public proportion = 25;
  public slideHeight = '200px';
  public slides = this.caraousalData.length;
  public overlayColor = '#ffffff00';
  public hideOverlay = false;
  public useKeyboard = true;
  public useMouseWheel = false;
  public orientation: Orientation = 'ltr';
  public log: string[] = [];
  public darkMode = false;


}
