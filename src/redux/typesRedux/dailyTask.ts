export type dailyItemsType = {
  id?: number;
  category: string;
  titleText: string;
  supText?: string;
  isCompletedTask: boolean;
  count: number;
  exp: number;
  health: number;
};

export interface dailyState {
  items: dailyItemsType[];
}

export enum dailyActionsType {
  SET_DAILY_ITEMS = 'SET_DAILY_ITEMS',
  SET_DAILY_SUCCESS_TASK = 'SET_DAILY_SUCCESS_TASK',
  SET_DAILY_DEFAULT_TASK = 'SET_DAILY_DEFAULT_TASK',
}

interface setDailyItemsType {
  type: dailyActionsType.SET_DAILY_ITEMS;
  payload: any;
}

interface setDailySuccessType {
  type: dailyActionsType.SET_DAILY_SUCCESS_TASK;
  payload: number;
}

interface setDailyDefaultType {
  type: dailyActionsType.SET_DAILY_DEFAULT_TASK;
  payload: number;
}

export type dailyActions = setDailyItemsType | setDailySuccessType | setDailyDefaultType;
