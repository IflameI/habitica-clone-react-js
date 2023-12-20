import {TaskFiltersType, TaskType} from "../../../../entities/task/model/config/task";

export const DEFAULT_DAILY_TASK_EXP = 10;
export const DEFAULT_DAILY_TASK_HEALTH = 10;

export type DailyTaskType = Required<Pick<TaskType, 'titleText' |
    'id' | 'count' | 'supText' | 'exp' | 'health' | 'isCompletedTask' | 'category'>> & TaskType;

export interface dailyState {
    dailyTasks: DailyTaskType[];
    currentFilter: string;
}


export enum DailyCategoryEnum {
    ALL = 'ALL',
    ACTIVE = 'ACTIVE',
    OTHER = 'OTHER',
}

export const dailyFilters: TaskFiltersType = [
    {
        title: 'Все',
        category: DailyCategoryEnum.ALL,
    },
    {
        title: 'Текущие',
        category: DailyCategoryEnum.ACTIVE,
    },
    {
        title: 'Прочие',
        category: DailyCategoryEnum.OTHER,
    }
]
