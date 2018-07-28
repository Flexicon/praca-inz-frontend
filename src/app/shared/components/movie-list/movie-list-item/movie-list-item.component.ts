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
        this.defaultImage = 'http://via.placeholder.com/150x200?text=No%20poster';
    }

}
