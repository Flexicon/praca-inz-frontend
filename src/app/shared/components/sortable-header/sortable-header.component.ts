import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { SortOption } from '@app/shared/types/sort-option.type';

@Component({
    selector: 'app-sortable-header',
    templateUrl: './sortable-header.component.html',
    styleUrls: ['./sortable-header.component.scss']
})
export class SortableHeaderComponent implements OnInit {
    private _sort: string;
    @Output() sortSelected = new EventEmitter<string>();
    sortOptions: SortOption[] = [
        { column: 'id', label: 'Added', direction: null, active: false },
        { column: 'title', label: 'Title', direction: null, active: false },
    ];
    column: string;

    constructor() {
    }

    ngOnInit() {
    }

    @Input() set sort(sort: string) {
        this._sort = sort;
        this.column = sort.replace('_desc', '');

        this.sortOptions.forEach(option => {
            if (this.column === option.column) {
                option.active = true;
                option.direction = sort.includes('_desc') ? 'desc' : 'asc';
            } else {
                option.direction = null;
                option.active = false;
            }
        });

        console.log(this.sortOptions);
    }

    get sort(): string {
        return this._sort;
    }

    changeSort(column: string) {
        if (this.column === column) {
            this.sortSelected.emit(this.sort.includes('_desc') ? column : `${column}_desc`);
        } else {
            this.sortSelected.emit(column);
        }
    }

}
