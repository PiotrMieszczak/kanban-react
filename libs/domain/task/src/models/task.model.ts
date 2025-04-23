import { Subtask } from "./subtask.model";

export interface Task {
 id: string;
 boardId: string;
 columnId: string;
 title: string;
 description: string;
 subtasks: Subtask[]
}