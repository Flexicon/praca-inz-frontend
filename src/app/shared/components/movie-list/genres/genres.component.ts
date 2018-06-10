import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-genres',
    template: `
        <span class="tag is-grey" *ngFor="let tag of splitGenreTags()">{{tag}}</span>
    `,
    styleUrls: ['./genres.component.scss']
})
export class GenresComponent implements OnInit {
    @Input() genres: string;

    constructor() {
    }

    ngOnInit() {
    }

    splitGenreTags(): string[] {
        return this.genres.split('|');
    }

}
