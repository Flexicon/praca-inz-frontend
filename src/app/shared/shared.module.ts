import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

import {
    NotFoundComponent,
    MovieListComponent,
    MovieListItemComponent
} from '@app/shared/components';
import { GenresComponent } from './components/movie-list/genres/genres.component';
import { SortableHeaderComponent } from './components/sortable-header/sortable-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
    imports: [
        CommonModule,
        ScrollToModule,
        FormsModule,
        NgSelectModule,
    ],
    declarations: [
        NotFoundComponent,
        MovieListComponent,
        MovieListItemComponent,
        GenresComponent,
        SortableHeaderComponent,
        PaginationComponent,
        LoaderComponent,
    ],
    exports: [
        MovieListComponent,
        SortableHeaderComponent,
        PaginationComponent,
        LoaderComponent,
    ],
})
export class SharedModule {
}
