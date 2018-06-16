import { Injectable } from '@angular/core';
import { BackendMode } from '@app/shared/repository/api.repository';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    private _mode: BackendMode;
    public modeChanged: Subject<string>;

    constructor() {
        this._mode = BackendMode.MONGO;
        this.modeChanged = new Subject<string>();
    }

    set mode(mode: BackendMode) {
        this._mode = mode;
        this.modeChanged.next(mode);
    }

    get mode() {
        return this._mode;
    }
}
