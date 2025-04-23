import { Columns } from "./columns.model";

export interface Board {
 id: string;
 name: string;
 columns: Columns[];
}