import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-loader',
    template: `
        <div class="app-loader" *ngIf="loading">
            <i class="fas fa-circle-notch fa-8x fa-spin has-text-primary"></i>
        </div>
    `,
    styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
    @Input() loading: boolean;

    constructor() {
    }

    ngOnInit() {
    }

}
