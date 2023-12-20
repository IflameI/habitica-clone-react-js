import {TaskFiltersType, TaskType} from "entities/task/model/config/task";
import {ModalsStateType} from "../../../../shared/model/config";

export type HabitTaskType =
    Required<Pick<TaskType, 'titleText' | 'isBadTask' | 'id' | 'isSuccessTask' | 'count' | 'supText' | 'diff' | 'category'>>
    & TaskType;

export enum HabitCategoryEnum {
    ALL = 'ALL',
    WEAK = 'WEAK',
    STRONG = 'STRONG'
}

export enum HabitModalsName {
    UPDATE_HABIT_TASK = 'UPDATE_HABIT_TASK',
}

export const habitFilters: TaskFiltersType = [
    {
        title: 'Все',
        category: HabitCategoryEnum.ALL,
    },
    {
        title: 'Слабые',
        category: HabitCategoryEnum.WEAK,
    },
    {
        title: 'Сильные',
        category: HabitCategoryEnum.STRONG,
    }
]

export interface habitState {
    habitTasks: HabitTaskType[];
    currentFilter: string,
    modals: ModalsStateType<HabitModalsName, HabitTaskType>[];
}

