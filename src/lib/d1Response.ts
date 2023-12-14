export interface D1Response<T> {
    meta:    Meta;
    results: T[];
    success: boolean;
}

export interface Meta {
    changed_db:   boolean;
    changes:      number;
    duration:     number;
    last_row_id:  number;
    rows_read:    number;
    rows_written: number;
    served_by:    string;
    size_after:   number;
}