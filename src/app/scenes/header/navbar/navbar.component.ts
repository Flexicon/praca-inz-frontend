import { Component, OnInit } from '@angular/core';
import { AvailableBackendModes, BackendMode } from '@app/shared/repository/api.repository';
import { ApiService } from '@app/shared/services/api.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    isMenuOpen: boolean;
    isDropdownOpen: boolean;
    availableBackendModes = AvailableBackendModes;

    constructor(
        private apiService: ApiService,
    ) {}

    ngOnInit() {
      this.isMenuOpen = false;
      this.isDropdownOpen = false;
    }

    handleModeSelect(mode: BackendMode) {
        this.apiService.mode = mode;
        this.isDropdownOpen = false;
    }

    isActiveMode(mode: BackendMode): boolean {
        return mode === this.apiService.mode;
    }
}
