import { SubtaskDTO } from "./subtask.dto";

export interface TaskDTO {
    id: string;
    boardId: string;
    columnId: string;
    title: string;
    description: string;
    subtasks: SubtaskDTO[]
}