export type PaginationData<T> = {
    limit: number;
    page: number;
    sort: string;
    total?: number;
    totalPages?: number;
    items?: T[];
}