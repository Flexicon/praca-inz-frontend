import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
    NotFoundComponent,
    MovieListComponent,
    MovieListItemComponent
} from '@app/shared/components';
import { GenresComponent } from './components/movie-list/genres/genres.component';
import { SortableHeaderComponent } from './components/sortable-header/sortable-header.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        NotFoundComponent,
        MovieListComponent,
        MovieListItemComponent,
        GenresComponent,
        SortableHeaderComponent,
    ],
    exports: [
        MovieListComponent,
        SortableHeaderComponent,
    ],
})
export class SharedModule {
}
