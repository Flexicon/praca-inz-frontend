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
    currentActiveMode: string;
    availableBackendModes = AvailableBackendModes;

    constructor(
        private apiService: ApiService,
    ) {}

    ngOnInit() {
      this.isMenuOpen = false;
      this.isDropdownOpen = false;
      this.currentActiveMode = this.getModeLabel(this.apiService.mode);
    }

    handleModeSelect(mode: BackendMode) {
        this.apiService.mode = mode;
        this.isDropdownOpen = false;
        this.currentActiveMode = this.getModeLabel(this.apiService.mode);
    }

    isActiveMode(mode: BackendMode): boolean {
        return mode === this.apiService.mode;
    }

    getModeLabel(mode: BackendMode): string {
        let modeLabel = '';

        this.availableBackendModes.forEach(m => {
            modeLabel = m.value === mode ? m.label : modeLabel;
        });

        return modeLabel;
    }
}
