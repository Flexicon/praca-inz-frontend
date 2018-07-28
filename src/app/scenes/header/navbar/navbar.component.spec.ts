import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { BackendMode, AvailableBackendModes } from '@app/shared/repository/api.repository';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#handleModeSelect', () => {
    it('should close the dropdown', () => {
      component.isDropdownOpen = true;
      component.handleModeSelect(BackendMode.MONGO);

      expect(component.isDropdownOpen).toBeFalsy();
    });

    it('should set the api mode', () => {
      component.handleModeSelect(BackendMode.COUCH);

      expect(component.currentModeLabel).toBe(AvailableBackendModes[BackendMode.COUCH]);
      expect(component.isActiveMode(BackendMode.COUCH)).toBeTruthy();
    });
  });
});
