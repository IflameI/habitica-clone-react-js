import {createAction} from "@reduxjs/toolkit";
import {actionWithPayloadType} from "shared/model/config/actionWithPayload";
import {RewardType} from "../config";


export const addReward = createAction('[TASK/REWARD] ADD_REWARD',
    actionWithPayloadType<{ newReward: RewardType }>());

export const changeReward = createAction('[TASK/REWARD] CHANGE_REWARD',
    actionWithPayloadType<{ newReward: RewardType }>());

export const deleteReward = createAction('[TASK/REWARD] DELETE_REWARD',
    actionWithPayloadType<{ rewardId: number }>());

export const changeCurrentRewardFilter = createAction('[FILTERS/REWARD] CHANGE_CURRENT_FILTER',
    actionWithPayloadType<{ newFilter: string }>());
