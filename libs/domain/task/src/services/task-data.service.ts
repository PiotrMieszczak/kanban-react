import { TaskDTO } from "../dto/task.dto";
import { httpRequestService } from "@shared/services/http/http.service";

class TaskDataService {
    public getTasksByBoardId = (boardId: string): Promise<any> => {
      return httpRequestService.get<{data: TaskDTO[]}>(`tasks?boardId=${boardId}`);
    };
  }
  
export const taskDataService = new TaskDataService();