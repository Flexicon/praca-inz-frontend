import { Component, OnInit } from '@angular/core';
import { ScrollToService } from '@nicky-lenaers/ngx-scroll-to';

import { MovieModel } from '@app/shared/models';
import { PaginationData } from '@app/shared/types/pagination.type';
import { MovieService } from '@app/shared/services';
import { initialPaginationParams } from '@app/scenes/home/containers/home/home.repository';
import { ApiService } from '@app/shared/services/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
    paginationData: PaginationData<MovieModel>;
    loading: boolean;

    constructor(
        private movieService: MovieService,
        private scrollToService: ScrollToService,
        private apiService: ApiService,
    ) {}

    ngOnInit() {
        this.resetPaginationParams();
        this.refreshMovies();
        this.apiService.modeChanged.subscribe(() => this.refreshMovies());
    }

    refreshMovies() {
        this.loading = true;
        this.movieService.getMovies(this.getPaginationParams()).subscribe(
            res => {
                this.loading = false;
                this.paginationData = res;
            },
            err => {
                this.loading = false;
                this.resetPaginationParams();
            },
        );
    }

    resetPaginationParams() {
        this.paginationData = initialPaginationParams;
    }

    getPaginationParams() {
        const { limit, page, sort, phrase } = this.paginationData;
        return { limit, page, sort, phrase };
    }

    handleSearch(phrase: string) {
        this.paginationData.phrase = phrase;
        this.paginationData.page = 1;
        this.refreshMovies();
    }

    handleSortSelected(sort: string) {
        this.paginationData.sort = sort;
        this.refreshMovies();
    }

    handlePageSelected(page: number) {
        this.scrollToService.scrollTo({ target: 'movies', duration: 300 });
        this.paginationData.page = page;
        this.refreshMovies();
    }

    displaySearchPhrase(phrase: string): string {
        return phrase.length > 10 ? phrase.slice(0, 10) + '...' : phrase;
    }
}
