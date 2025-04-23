import { BoardDTO } from "../dto/board.dto";
import { httpRequestService } from "@shared/services/http/http.service";

class BoardDataService {
    public getAllBoards = (): Promise<any> => {
      return httpRequestService.get<BoardDTO[]>(`/boards`);
    };

    public getBoardById = (id: string): Promise<any> => {
      return httpRequestService.get<BoardDTO>(`/boards/${id}`);
    };
  }
  
export const boardDataService = new BoardDataService();