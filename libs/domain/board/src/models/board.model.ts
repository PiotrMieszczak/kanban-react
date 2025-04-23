import { Columns } from "./column.model";

export interface Board {
 id: string;
 name: string;
 columns: Columns[];
}