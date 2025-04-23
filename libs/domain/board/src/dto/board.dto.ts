import { ColumnsDTO } from "./columns.dto";

export interface BoardDTO {
    id: string;
    name: string;
    columns: ColumnsDTO[];
}
  