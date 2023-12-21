import {createReducer} from "@reduxjs/toolkit";
import {RewardActions} from "../actions";
import {RewardCategoryEnum, RewardModalsName, rewardState} from "../config";

const initialState: rewardState = {
    rewards: [
        {
            id: 0,
            titleText: 'Награди себя',
            supText: 'Смотрите телевизор,играйте в игры, кушайте вкусняшки,вам решать!',
            cost: 10,
            category: RewardCategoryEnum.SEASON,
        },
    ],
    currentFilter: RewardCategoryEnum.ALL,
    modals: [
        {
            name: RewardModalsName.UPDATE_REWARD,
            isOpen: false,
            data: null
        }
    ]
};


export const reward = createReducer(initialState, (builder) => builder

    .addCase(RewardActions.addReward, (state, {payload: {newReward}}) => ({
        ...state,
        rewards: [...state.rewards, newReward],
    }))
    .addCase(RewardActions.changeReward, (state, {payload: {newReward}}) => ({
        ...state,
        rewards: state.rewards.map((reward) =>
            reward.id === newReward.id
                ? {
                    ...reward,
                    titleText: newReward.titleText,
                    supText: newReward.supText,
                    cost: newReward.cost,
                }
                : reward),
    }))
    .addCase(RewardActions.deleteReward, (state, {payload: {rewardId}}) => ({
        ...state,
        rewards: state.rewards.filter((reward) => reward.id !== rewardId)
    }))
    .addCase(RewardActions.changeCurrentRewardFilter, (state, {payload: {newFilter}}) => ({
        ...state,
        currentFilter: newFilter
    }))
    .addCase(RewardActions.openRewardModal, (state, {payload: {modalName, data}}) => ({
        ...state,
        modals: state.modals.map((modal) => modal.name === modalName ? {
            ...modal,
            isOpen: !modal.isOpen,
            data
        } : modal)
    }))
    .addCase(RewardActions.closeRewardModal, (state, {payload: {modalName}}) => ({
        ...state,
        modals: state.modals.map((modal) => modal.name === modalName ? {
            ...modal,
            isOpen: !modal.isOpen,
            data: null,
        } : modal)
    }))
);
