import { BoardDTO } from '../dto';
import { Board } from '../models/board.model';

export class BoardAdapter {
  public static createBoard(boardDTO: BoardDTO): Board {
    return {
      ...boardDTO,
    };
  }
}