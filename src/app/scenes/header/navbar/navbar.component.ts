import { Component, OnInit } from '@angular/core';
import { AvailableBackendModes, BackendMode } from '@app/shared/repository/api.repository';
import { ApiService } from '@app/shared/services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isMenuOpen: boolean;
  isDropdownOpen: boolean;
  currentModeLabel: string;
  availableBackendModes = Object.entries(AvailableBackendModes);

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isMenuOpen = false;
    this.isDropdownOpen = false;
    this.currentModeLabel = AvailableBackendModes[this.apiService.mode];
  }

  handleModeSelect(mode: BackendMode) {
    this.apiService.mode = mode;
    this.isDropdownOpen = false;
    this.currentModeLabel = AvailableBackendModes[mode];
  }

  isActiveMode(mode: BackendMode): boolean {
    return mode === this.apiService.mode;
  }
}
