import { Column } from '../models/column.model';
import { ColumnDTO } from '../dto/column.dto';

export class ColumnAdapter {
  public static createColumn(columnDTO: ColumnDTO): Column {
    return {
      ...columnDTO,
    };
  }
}