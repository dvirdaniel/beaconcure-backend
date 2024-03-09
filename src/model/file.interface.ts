import { Table } from './model/table.interface';

export interface File {
    name: string;
    tables: Table[];
}