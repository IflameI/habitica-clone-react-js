import {HabitCategoryEnum, HabitModalsName, habitState} from "../config";
import {createReducer} from "@reduxjs/toolkit";
import {HabitTaskActions} from "../actions";

const initialState: habitState = {
    habitTasks: [
        {
            id: 1,
            category: HabitCategoryEnum.WEAK,
            titleText: 'Плохая привычка',
            supText: '',
            isBadTask: true,
            isSuccessTask: false,
            count: 0,
            diff: 1,
        },
        {
            id: 2,
            category: HabitCategoryEnum.WEAK,
            titleText: 'Проверить почту',
            isBadTask: false,
            isSuccessTask: false,
            count: 0,
            supText: '',
            diff: 1,
        },
    ],
    currentFilter: HabitCategoryEnum.WEAK,
    modals: [
        {
            name: HabitModalsName.UPDATE_HABIT_TASK,
            isOpen: false,
            data: null
        }
    ]
};


export const habitTask = createReducer(initialState, (builder) => builder
    .addCase(HabitTaskActions.addHabitTask, (state, {payload: {newHabit}}) => ({
        ...state,
        habitTasks: [...state.habitTasks, newHabit],
    }))
    .addCase(HabitTaskActions.successHabitTask, (state, {payload: {taskId}}) => ({
        ...state,
        habitTasks: state.habitTasks.map((habitTask) =>
            habitTask.id === taskId ? {
                ...habitTask,
                isSuccessTask: true,
                category: HabitCategoryEnum.STRONG
            } : habitTask,
        ),
    }))
    .addCase(HabitTaskActions.plusHabitCount, (state, {payload: {taskId}}) => ({
        ...state,
        habitTasks: state.habitTasks.map((habitTask) =>
            habitTask.id === taskId ? {...habitTask, count: habitTask.count + 1} : habitTask,
        ),
    }))
    .addCase(HabitTaskActions.minusHabitCount, (state, {payload: {taskId}}) => ({
        ...state,
        habitTasks: state.habitTasks.map((habitTask) =>
            habitTask.id === taskId ? {...habitTask, count: habitTask.count - 1} : habitTask,
        ),
    }))
    .addCase(HabitTaskActions.changeHabitTask, (state, {payload: {newHabit}}) => ({
        ...state,
        habitTasks: state.habitTasks.map((habitTask) =>
            habitTask.id === newHabit.id
                ? {
                    ...habitTask,
                    titleText: newHabit.titleText,
                    supText: newHabit.supText,
                    isBadTask: newHabit.isBadTask,
                    isSuccessTask: newHabit.isSuccessTask,
                    diff: newHabit.diff + 1,
                }
                : habitTask,
        ),
    }))
    .addCase(HabitTaskActions.deleteHabitTask, (state, {payload: {taskId}}) => ({
        ...state,
        habitTasks: state.habitTasks.filter((habitTask) => habitTask.id !== taskId)
    }))
    .addCase(HabitTaskActions.changeCurrentHabitFilter, (state, {payload: {newFilter}}) => ({
        ...state,
        currentFilter: newFilter
    }))
    .addCase(HabitTaskActions.openHabitModal, (state, {payload: {modalName, data}}) => ({
        ...state,
        modals: state.modals.map((modal) => modal.name === modalName ? {
            ...modal,
            isOpen: !modal.isOpen,
            data
        } : modal)
    }))
    .addCase(HabitTaskActions.closeHabitModal, (state, {payload: {modalName}}) => ({
        ...state,
        modals: state.modals.map((modal) => modal.name === modalName ? {
            ...modal,
            isOpen: !modal.isOpen,
            data: null,
        } : modal)
    }))
);
