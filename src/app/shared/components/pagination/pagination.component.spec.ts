import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';
import { FormsModule } from '@angular/forms';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;
  const startingPageNumber = 3;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [PaginationComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.currentPage = startingPageNumber;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#handlePageSelect', () => {
    it('should emit pageSelected with current page number', done => {
      component.pageSelected.subscribe(number => {
        expect(number).toBe(startingPageNumber);
        done();
      });
      component.handlePageSelect();
    });
  });

  describe('#handlePreviousPageClick', () => {
    it('should emit pageSelected with the next page number', done => {
      component.pageSelected.subscribe(number => {
        expect(number).toBe(startingPageNumber + 1);
        done();
      });
      component.handleNextPageClick();
    });
  });

  describe('#handleNextPageClick', () => {
    it('should emit pageSelected with the previous page number', done => {
      component.pageSelected.subscribe(number => {
        expect(number).toBe(startingPageNumber - 1);
        done();
      });
      component.handlePreviousPageClick();
    });
  });
});
