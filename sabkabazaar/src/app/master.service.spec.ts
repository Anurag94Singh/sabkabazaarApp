import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { MasterService } from './master.service';
import { banner } from './models/banner.model';
import { category } from './models/category.model';
import { product } from './models/product.model';

describe('MasterService', () => {
  let service: MasterService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new MasterService(httpClientSpy as any);
  });

  it('should return expected banners (HttpClient called once)', () => {
    const expectedBanners: banner[] =
      [{
        id: '1',
        bannerImageUrl: 'image.jpg',
        bannerImageAlt: 'image',
        isActive: true,
        order: 0
      }];

    httpClientSpy.get.and.returnValue(of(expectedBanners));

    service.getBanners().subscribe(
      banners => expect(banners).toEqual(expectedBanners, 'expected banners'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected categories (HttpClient called once)', () => {
    const expectedCategories: category[] =
      [{
        id: '1',
        imageUrl: 'image.jpg',
        description: 'image',
        key: '',
        name: ''
      }];

    httpClientSpy.get.and.returnValue(of(expectedCategories));

    service.getCategories().subscribe(
      categories => expect(categories).toEqual(expectedCategories, 'expected categories'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return expected products (HttpClient called once)', () => {
    const expectedProducts: product[] =
      [{
        id: '',
        imageURL: '',
        name: '',
        category: '',
        description: '',
        price: 0,
        stock: 0,
        sku: '',
        visible: false
      }];

    httpClientSpy.get.and.returnValue(of(expectedProducts));

    service.getProducts().subscribe(
      products => expect(products).toEqual(expectedProducts, 'expected products'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
