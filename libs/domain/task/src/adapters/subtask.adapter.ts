import { Subtask } from '../models/subtask.model';
import { SubtaskDTO } from '../dto/subtask.dto';

export class SubtaskAdapter {
  public static createSubtask(subtaskDTO: SubtaskDTO): Subtask {
    return {
      ...subtaskDTO,
    };
  }
}