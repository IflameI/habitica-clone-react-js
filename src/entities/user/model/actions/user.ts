import {createAction} from "@reduxjs/toolkit";
import {actionWithPayloadType} from "shared/model/config/actionWithPayload";
import {UserThingType} from "../config/config";


export const addUserLevelPoint = createAction('[USER/LEVEL] ADD_USER_LEVEL_POINT',
    actionWithPayloadType<{ level_point: number }>());

export const minusUserLevelPoint = createAction('[USER/LEVEL] MINUS_USER_LEVEL',
    actionWithPayloadType<{ level_point: number }>());

export const resetUserLevelPoint = createAction('[USER/LEVEL] RESET_USER_LEVEL_POINT');

export const addUserHp = createAction('[USER/HP] ADD_USER_HEALTH',
    actionWithPayloadType<{ hp: number }>());

export const minusUserHp = createAction('[USER/HP] MINUS_USER_HEALTH',
    actionWithPayloadType<{ hp: number }>());

export const resetUserHp = createAction('[USER/HP] RESET_USER_HEALTH');

export const addUserMoney = createAction('[USER/MONEY] ADD_USER_MONEY',
    actionWithPayloadType<{ money: number }>());

export const minusUserMoney = createAction('[USER/MONEY] MINUS_USER_MONEY',
    actionWithPayloadType<{ money: number }>());

export const increaseMaxUserLevelPoint = createAction('[USER/LEVEL] INCREASE_MAX_LEVEL_POINT');

export const increaseUserLevel = createAction('[USER/LEVEL] INCREASE_USER_LEVEL');

export const buyThing = createAction('[USER/MONEY] BUY_THING',
    actionWithPayloadType<{ newThing: UserThingType }>());

