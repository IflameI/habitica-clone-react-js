import {TodoCategoryEnum, TodoModalsName, toDoState} from "../config";
import {createReducer} from "@reduxjs/toolkit";
import {TodoTaskActions} from "../actions";

const initialState: toDoState = {
    toDoTasks: [
        {
            id: 0,
            category: TodoCategoryEnum.ACTIVE,
            titleText: 'Растяжка > Ежедневная тренировка',
            supText: '',
            diff: 1,
            remainDay: 0,
            finishUntilDate: null,
        },
    ],
    currentFilter: TodoCategoryEnum.ACTIVE,
    modals: [
        {
            name: TodoModalsName.UPDATE_TODO,
            isOpen: false,
            data: null
        }
    ]
};

export const todoTask = createReducer(initialState, (builder) => builder

    .addCase(TodoTaskActions.addTodoTask, (state, {payload: {newTask}}) => ({
        ...state,
        toDoTasks: [...state.toDoTasks, newTask],
    }))
    .addCase(TodoTaskActions.successTodoTask, (state, {payload: {taskId}}) => ({
        ...state,
        toDoTasks: state.toDoTasks.map((toDoTask) =>
            toDoTask.id === taskId
                ? {...toDoTask, isCompletedTask: true, category: TodoCategoryEnum.COMPLETED}
                : toDoTask,
        ),
    }))
    .addCase(TodoTaskActions.changeTodoTask, (state, {payload: {taskId, newTask}}) => ({
        ...state,
        toDoTasks: state.toDoTasks.map((toDoTask) =>
            toDoTask.id === taskId
                ? {
                    ...toDoTask,
                    titleText: newTask.titleText,
                    supText: newTask.supText,
                    diff: newTask.diff + 1,
                    remainDay: newTask.remainDay,
                }
                : toDoTask,
        ),
    }))
    .addCase(TodoTaskActions.deleteTodoTask, (state, {payload: {taskId}}) => ({
        ...state,
        toDoTasks: state.toDoTasks.filter((toDoTask) => toDoTask.id !== taskId),
    }))
    .addCase(TodoTaskActions.changeCategoryTodoTask, (state, {payload: {taskId, newCategory}}) => ({
        ...state,
        toDoTasks: state.toDoTasks.map((toDoTask) =>
            toDoTask.id === taskId ? {...toDoTask, category: newCategory} : toDoTask,
        ),
    }))
    .addCase(TodoTaskActions.changeCurrentTodoFilter, (state, {payload: {newFilter}}) => ({
        ...state,
        currentFilter: newFilter,
    }))
    .addCase(TodoTaskActions.openToDoModal, (state, {payload: {modalName, data}}) => ({
        ...state,
        modals: state.modals.map((modal) => modal.name === modalName ? {
            ...modal,
            isOpen: !modal.isOpen,
            data
        } : modal)
    }))
    .addCase(TodoTaskActions.closeToDoModal, (state, {payload: {modalName}}) => ({
        ...state,
        modals: state.modals.map((modal) => modal.name === modalName ? {
            ...modal,
            isOpen: !modal.isOpen,
            data: null,
        } : modal)
    }))
);
