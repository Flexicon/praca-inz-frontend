import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
    @Output() searchPhrase = new EventEmitter<string>();
    phrase: string;

    constructor() {}

    ngOnInit() {
        this.phrase = '';
    }

    handleSubmit() {
        this.searchPhrase.emit(this.phrase);
    }
}
