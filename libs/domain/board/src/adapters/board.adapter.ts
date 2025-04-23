import { BoardDTO } from '../dto';
import { Board } from '../models/board.model';
import { ColumnAdapter } from './column.adapter';

export class BoardAdapter {
  public static createBoard(boardDTO: BoardDTO): Board {
    return {
      ...boardDTO,
      columns: boardDTO.columns.map(columnDTO => ColumnAdapter.createColumn(columnDTO))
    };
  }
}