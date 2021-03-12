import { ComponentFixture, fakeAsync, inject, TestBed, tick } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatCarouselModule } from 'ng-mat-carousel';
import { of } from 'rxjs';

import { MasterService } from '../master.service';
import { Category } from '../models/category.model';

import { CategoriesComponent } from './categories.component';
import { CategoryComponent } from './category/category.component';

describe('CategoriesComponent', () => {

  let component: CategoriesComponent;
  let fixture: ComponentFixture<CategoriesComponent>;

  let masterServiceStub: Partial<MasterService>;

  let masterService: MasterService;

  masterServiceStub = {
    cartItemCounts: 0,
    cartTotal: 0,
    cartItems: [],
    mainCategories: [],
    getCategories: () => {
      return of([
        {
          id: '',
          imageUrl: '',
          name: '',
          key: '',
          description: ''
        }
      ]);
    },
    getBanners: () => {
      return of([
        {
          bannerImageAlt: 'Independence Day Deal - 25% off on shampoo',
          bannerImageUrl: '/static/images/offers/offer1.jpg',
          id: '5b6c38156cb7d770b7010ccc',
          isActive: true,
          order: 1
        }
      ]);
    }
  };


  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [MatCarouselModule, NoopAnimationsModule],
      declarations: [CategoriesComponent, CategoryComponent],
      providers: [{ provide: MasterService, useValue: masterServiceStub }],
    })
      .compileComponents();

    fixture = TestBed.createComponent(CategoriesComponent);
    component = fixture.componentInstance;

    masterService = TestBed.inject(MasterService);

    fixture.detectChanges();
  });

  it('Tests getCategories!!!', fakeAsync(() => {
    const categorySpy = spyOn(masterService, 'getCategories').and.returnValue(
      of([
        {
          id: '',
          imageUrl: '',
          name: '',
          key: '',
          description: ''
        }
      ])
    );

    const subSpy = spyOn(masterService.getCategories(), 'subscribe');

    component.ngOnInit();
    tick();

    expect(categorySpy).toHaveBeenCalledBefore(subSpy);
    expect(subSpy).toHaveBeenCalled();

  }));

  it('retrieves all the categories', inject([MasterService], (mService: MasterService) => {
    mService.getCategories().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }));

  it('retrieves all the banners', inject([MasterService], (mService: MasterService) => {
    mService.getBanners().subscribe(result => expect(result.length).toBeGreaterThan(0));
  }));

  it('should create one section based on category data(1)', () => {
    fixture.detectChanges();
    
    expect(fixture.nativeElement.querySelectorAll('.categorySection').length).toEqual(1);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
