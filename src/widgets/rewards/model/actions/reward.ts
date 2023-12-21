import {createAction} from "@reduxjs/toolkit";
import {actionWithPayloadType} from "shared/model/config/actionWithPayload";
import {RewardModalsName, RewardType} from "../config";


export const addReward = createAction('[TASK/REWARD] ADD_REWARD',
    actionWithPayloadType<{ newReward: RewardType }>());

export const changeReward = createAction('[TASK/REWARD] CHANGE_REWARD',
    actionWithPayloadType<{ newReward: RewardType }>());

export const deleteReward = createAction('[TASK/REWARD] DELETE_REWARD',
    actionWithPayloadType<{ rewardId: number }>());

export const changeCurrentRewardFilter = createAction('[FILTERS/REWARD] CHANGE_CURRENT_FILTER',
    actionWithPayloadType<{ newFilter: string }>());

export const openRewardModal = createAction('[MODAL/REWARD] OPEN_REWARD_MODAL',
    actionWithPayloadType<{ modalName: RewardModalsName, data: RewardType }>());

export const closeRewardModal = createAction('[MODAL/REWARD] CLOSE_REWARD_MODAL',
    actionWithPayloadType<{ modalName: RewardModalsName }>());
