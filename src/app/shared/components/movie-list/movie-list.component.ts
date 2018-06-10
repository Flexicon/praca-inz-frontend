import { Component, Input, OnInit } from '@angular/core';

import { MovieModel } from '@app/shared/models';

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
    @Input() movies: MovieModel[];

    constructor() {
    }

    ngOnInit() {
    }

}
