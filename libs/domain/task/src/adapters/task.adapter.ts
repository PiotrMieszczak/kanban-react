import { TaskDTO } from '../dto';
import { Task } from '../models/task.model';
import { SubtaskAdapter } from './subtask.adapter';

export class TaskAdapter {
  public static createTask(taskDTO: TaskDTO): Task {
    return {
      ...taskDTO,
      subtasks: taskDTO.subtasks.map(subtaskDTO => SubtaskAdapter.createSubtask(subtaskDTO))
    };
  }
}