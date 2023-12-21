import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../../../../app/store/model/store.model";
import {TodoModalsName} from "../config";

export const selectTodoTask = (state: RootState) => state.todoTask;

export const selectTodoTasks = createSelector(
    selectTodoTask,
    (state) => state.toDoTasks,
);

export const selectCurrentTodoTaskFilter = createSelector(
    selectTodoTask,
    (state) => state.currentFilter,
);


export const selectTodoModalState = createSelector(
    selectTodoTask,
    (state) => state.modals[state.modals.findIndex((modal) => modal.name === TodoModalsName.UPDATE_TODO)],
);

export const selectIsUpdateTodoModalOpen = createSelector(
    selectTodoModalState,
    (state) => state.isOpen,
);

export const selectUpdateTodoModalData = createSelector(
    selectTodoModalState,
    (state) => state.data,
);
