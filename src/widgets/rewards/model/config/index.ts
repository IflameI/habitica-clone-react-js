import {TaskFiltersType, TaskType} from "entities/task/model/config/task";

export const DEFAULT_REWARD_COST = 10

export type RewardType = Required<Pick<TaskType, 'id' | 'titleText' | 'supText' | 'cost' | 'category'>> & TaskType

export interface rewardState {
    rewards: RewardType[];
    currentFilter: string
}

export enum RewardCategoryEnum {
    ALL = 'ALL',
    SEASON = 'SEASON',
    LATER = 'LATER'
}

export const rewardFilters: TaskFiltersType = [
    {
        title: 'Все',
        category: RewardCategoryEnum.ALL,
    },
    {
        title: 'Сезонные',
        category: RewardCategoryEnum.SEASON,
    },
    {
        title: 'Отложенные',
        category: RewardCategoryEnum.LATER,
    }
]
