import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableHeaderComponent } from './sortable-header.component';

describe('SortableHeaderComponent', () => {
  let component: SortableHeaderComponent;
  let fixture: ComponentFixture<SortableHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortableHeaderComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#changeSort', () => {
    it('should emit the selected column for sorting', done => {
      const column = 'title';
      component.sortSelected.subscribe(selected => {
        expect(selected).toBe(column);
        done();
      });
      component.changeSort(column);
    });

    it('should emit the selected column inverted when selecting the current column', done => {
      const column = 'title';
      component.sort = column;
      component.sortSelected.subscribe(selected => {
        expect(selected).toBe(column + '_desc');
        done();
      });
      component.changeSort(column);
    });
  });
});
