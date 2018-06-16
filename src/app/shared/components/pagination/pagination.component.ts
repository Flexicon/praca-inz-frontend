import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
    selector: 'app-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent {
    @Input() currentPage: number;
    @Input() totalPages: number;
    @Output() pageSelected = new EventEmitter<number>();

    constructor() {}

    handlePageSelect() {
        this.pageSelected.emit(this.currentPage);
    }

    handlePreviousPageClick() {
        this.pageSelected.emit(this.currentPage - 1);
    }

    handleNextPageClick() {
        this.pageSelected.emit(this.currentPage + 1);
    }
}
