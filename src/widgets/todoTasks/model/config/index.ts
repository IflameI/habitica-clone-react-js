import {TaskFiltersType, TaskType} from "../../../../entities/task/model/config/task";
import {ModalsStateType} from "../../../../shared/model/config";


export type ToDoTaskType =
    Required<Pick<TaskType, 'titleText' | 'id' | 'supText' | 'diff' | 'category' | 'remainDay' | 'finishUntilDate'>>
    & TaskType;


export enum TodoModalsName {
    UPDATE_TODO = 'UPDATE_TODO',
}


export interface toDoState {
    toDoTasks: ToDoTaskType[];
    currentFilter: string;
    modals: ModalsStateType<TodoModalsName, ToDoTaskType>[];
}

export enum TodoCategoryEnum {
    ACTIVE = 'ACTIVE',
    DATE = 'DATE',
    COMPLETED = 'COMPLETED'
}

export const todoFilters: TaskFiltersType = [
    {
        title: 'Активные',
        category: TodoCategoryEnum.ACTIVE,
    },
    {
        title: 'С датой',
        category: TodoCategoryEnum.DATE,
    },
    {
        title: 'Сделанные',
        category: TodoCategoryEnum.COMPLETED,
    }
]
