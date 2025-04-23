import { Columns } from '../models/columns.model';
import { ColumnsDTO } from '../dto/columns.dto';

export class ColumnsAdapter {
  public static createColumns(columnsDTO: ColumnsDTO): Columns {
    return {
      ...columnsDTO,
    };
  }
}