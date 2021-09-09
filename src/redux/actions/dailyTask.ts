/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { dailyActions, dailyActionsType, dailyItemsType } from '../typesRedux/dailyTask';

export const setDailyItems = (payload: dailyItemsType): dailyActions => {
  return { type: dailyActionsType.SET_DAILY_ITEMS, payload };
};

export const setDailySuccessTask = (payload: number): dailyActions => {
  return { type: dailyActionsType.SET_DAILY_SUCCESS_TASK, payload };
};

export const setDailyDefaultTask = (payload: number): dailyActions => {
  return { type: dailyActionsType.SET_DAILY_DEFAULT_TASK, payload };
};
