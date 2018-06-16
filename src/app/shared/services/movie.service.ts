import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs/index';
import { map } from 'rxjs/internal/operators';

import { environment } from '@env/environment';
import { PaginationData } from '@app/shared/types/pagination.type';
import { MovieModel } from '@app/shared/models';
import { ApiService } from '@app/shared/services/api.service';

@Injectable({
    providedIn: 'root',
})
export class MovieService {
    private baseUrl: string;

    constructor(private http: HttpClient, private apiService: ApiService) {
        this.baseUrl = environment.api;
    }

    getMovies(params): Observable<PaginationData<MovieModel>> {
        return this.http
            .get(this.baseUrl + this.apiService.mode + '/movies', { params })
            .pipe(map(res => <PaginationData<MovieModel>>res));
    }
}
