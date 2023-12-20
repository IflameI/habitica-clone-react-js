import {createAction} from "@reduxjs/toolkit";
import {actionWithPayloadType} from "shared/model/config/actionWithPayload";
import {DailyTaskType} from "../config";


export const addDailyTask = createAction('[TASK/DAILY] ADD_DAILY_TASK',
    actionWithPayloadType<{ newTask: DailyTaskType }>());

export const successDailyTask = createAction('[TASK/DAILY] SUCCESS_DAILY_TASK',
    actionWithPayloadType<{ taskId: number }>());

export const resetDailyTask = createAction('[TASK/DAILY] RESET_DAILY_TASK',
    actionWithPayloadType<{ taskId: number }>());

export const changeCurrentDailyFilter = createAction('[FILTERS/DAILY] CHANGE_FILTER',
    actionWithPayloadType<{ newFilter: string }>());
