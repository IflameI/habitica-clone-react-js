import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store/model/store.model";
import {HabitModalsName} from "../config";

export const selectHabitTask = (state: RootState) => state.habitTask;

export const selectHabitTasks = createSelector(
    selectHabitTask,
    (state) => state.habitTasks,
);

export const selectCurrentHabitTaskFilter = createSelector(
    selectHabitTask,
    (state) => state.currentFilter,
);

export const selectModals = createSelector(
    selectHabitTask,
    (state) => state.modals,
);

export const selectHabitModalState = createSelector(
    selectHabitTask,
    (state) => state.modals[state.modals.findIndex((modal) => modal.name === HabitModalsName.UPDATE_HABIT_TASK)],
);

export const selectIsUpdateHabitModalOpen = createSelector(
    selectHabitModalState,
    (state) => state.isOpen,
);

export const selectUpdateHabitModalData = createSelector(
    selectHabitModalState,
    (state) => state.data,
);
