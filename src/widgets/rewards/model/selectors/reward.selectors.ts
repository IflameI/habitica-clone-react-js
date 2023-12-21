import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store/model/store.model";
import {RewardModalsName} from "../config";

export const selectReward = (state: RootState) => state.reward;

export const selectRewards = createSelector(
    selectReward,
    (state) => state.rewards,
);

export const selectCurrentRewardFilter = createSelector(
    selectReward,
    (state) => state.currentFilter,
);

export const selectRewardModalState = createSelector(
    selectReward,
    (state) => state.modals[state.modals.findIndex((modal) => modal.name === RewardModalsName.UPDATE_REWARD)],
);

export const selectIsUpdateRewardModalOpen = createSelector(
    selectRewardModalState,
    (state) => state.isOpen,
);

export const selectUpdateRewardModalData = createSelector(
    selectRewardModalState,
    (state) => state.data,
);

