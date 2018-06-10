import { Component, OnInit } from '@angular/core';

import { PaginationData } from '@app/shared/types/pagination.type';
import { MovieService } from '@app/shared/services';
import { MovieModel } from '@app/shared/models';

@Component({
    selector: 'app-search-results',
    templateUrl: './search-results.component.html',
    styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
    paginationData: PaginationData<MovieModel>;

    constructor(
        private movieService: MovieService
    ) {
    }

    ngOnInit() {
        this.resetPaginationParams();
        this.refreshMovies();
    }

    refreshMovies() {
        this.movieService.getMovies(this.getPaginationParams())
            .subscribe(res => this.paginationData = res);
    }

    resetPaginationParams() {
        this.paginationData = {
            page: 1,
            limit: 20,
            sort: 'id',
        };
    }

    getPaginationParams() {
        const { limit, page, sort } = this.paginationData;
        return { limit, page, sort };
    }

    onSortSelected(sort: string) {
        this.paginationData.sort = sort;
        this.refreshMovies();
    }

}
