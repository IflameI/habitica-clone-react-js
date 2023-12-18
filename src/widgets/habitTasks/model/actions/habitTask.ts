import {createAction} from "@reduxjs/toolkit";
import {actionWithPayloadType} from "shared/types/actionWithPayload";
import {HabitTaskType} from "../config";


export const addHabitTask = createAction('[TASK/HABIT] ADD_HABIT_TASK',
    actionWithPayloadType<{ newHabit: HabitTaskType }>());

export const successHabitTask = createAction('[TASK/HABIT] SUCCESS_HABIT_TASK',
    actionWithPayloadType<{ taskId: number }>());


export const plusHabitCount = createAction('[TASK/HABIT] PLUS_HABIT_COUNT',
    actionWithPayloadType<{ taskId: number }>());

export const minusHabitCount = createAction('[TASK/HABIT] MINUS_HABIT_COUNT',
    actionWithPayloadType<{ taskId: number }>());

export const changeHabitTask = createAction('[TASK/HABIT] CHANGE_HABIT',
    actionWithPayloadType<{ newHabit: HabitTaskType }>());

export const deleteHabitTask = createAction('[TASK/HABIT] DELETE_HABIT',
    actionWithPayloadType<{ taskId: number }>());

export const changeCurrentHabitFilter = createAction('[FILTERS/HABIT] CHANGE_FILTER',
    actionWithPayloadType<{ newFilter: string }>());
