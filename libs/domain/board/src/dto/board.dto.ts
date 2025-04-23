import { ColumnDTO } from "./column.dto";

export interface BoardDTO {
    id: string;
    name: string;
    columns: ColumnDTO[];
}
  