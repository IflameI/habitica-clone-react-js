import {TaskFiltersType, TaskType} from "entities/task/model/config/task";
import {ModalsStateType} from "../../../../shared/model/config";

export const DEFAULT_REWARD_COST = 10

export type RewardType = Required<Pick<TaskType, 'id' | 'titleText' | 'supText' | 'cost' | 'category'>> & TaskType

export enum RewardModalsName {
    UPDATE_REWARD = 'UPDATE_REWARD',
}

export interface rewardState {
    rewards: RewardType[];
    currentFilter: string
    modals: ModalsStateType<RewardModalsName, RewardType>[];
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
