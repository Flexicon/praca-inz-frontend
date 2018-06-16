export type PaginationData<T> = {
    limit: number;
    page: number;
    sort: string;
    phrase: string;
    total?: number;
    totalPages?: number;
    items?: T[];
};
