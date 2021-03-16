import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Category } from 'src/app/models/category.model';

import { CategoryComponent } from './category.component';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;
  let h1: HTMLElement;
  let description: HTMLDivElement;
  let button: HTMLButtonElement;
  let categoryData: Category;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;

    h1 = fixture.nativeElement.querySelector('h1');
    description = fixture.nativeElement.querySelector('.category-description');
    button = fixture.nativeElement.querySelector('button');

    categoryData = {id : '', name : '', imageUrl : '', key : '', description : ''};
    component.category = categoryData;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display original title', () => {
    expect(h1.textContent).toEqual('');
  });

  /* add comments for everything */
  it('should display changed title', () => {
    component.category.name = 'Test Title';

    fixture.detectChanges();

    expect(h1.textContent).toContain('Test Title');
  });

  it('should display original description', () => {

    expect(description.textContent).toEqual('');

  });

  it('should display changed title', () => {
    component.category.description = 'Test Description';

    fixture.detectChanges();

    expect(description.textContent).toContain('Test Description');
  });

  it('should display original button content as empty', () => {
    expect(button.textContent).toEqual('');
  });

  it('should display changed button content', () => {
    component.category.key = 'Test Button';

    fixture.detectChanges();

    expect(button.textContent).toContain('Test Button');
  });
});
