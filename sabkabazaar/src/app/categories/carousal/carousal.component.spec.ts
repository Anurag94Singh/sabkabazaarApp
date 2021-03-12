import { ComponentFixture, TestBed } from '@angular/core/testing';
import { banner } from 'src/app/models/banner.model';

import { CarousalComponent } from './carousal.component';

describe('CarousalComponent', () => {
  let component: CarousalComponent;
  let fixture: ComponentFixture<CarousalComponent>;
  let bannersData: banner[];
  let carousals: HTMLElement[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarousalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousalComponent);
    component = fixture.componentInstance;
    bannersData = [{
      bannerImageAlt: "Independence Day Deal - 25% off on shampoo",
      bannerImageUrl: "/static/images/offers/offer1.jpg",
      id: "5b6c38156cb7d770b7010ccc",
      isActive: true,
      order: 1
    }];
    component.caraousalData = bannersData;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
