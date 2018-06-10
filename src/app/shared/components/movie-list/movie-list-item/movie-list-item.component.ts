import { Component, Input, OnInit } from '@angular/core';

import { MovieModel } from '@app/shared/models';

@Component({
    selector: 'app-movie-list-item',
    templateUrl: './movie-list-item.component.html',
    styleUrls: ['./movie-list-item.component.scss']
})
export class MovieListItemComponent implements OnInit {
    @Input() movie: MovieModel;
    defaultImage: string;

    constructor() {
    }

    ngOnInit() {
        this.defaultImage = 'https://bulma.io/images/placeholders/128x128.png';
    }

}
