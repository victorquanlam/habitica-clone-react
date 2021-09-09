export type habitItemsType = {
  id: number;
  category: string;
  titleText: string;
  isBadTask?: boolean;
  isSucsessTask?: boolean;
  count?: number;
  supText?: string;
  diff?: number;
};

export interface habitState {
  items: habitItemsType[];
}

export enum habitActionsType {
  SET_HABIT_ITEMS = 'SET_HABIT_ITEMS',
  SET_HABIT_SUCCESS_TASK = 'SET_HABIT_SUCCESS_TASK',
  SET_PLUS_HABIT_COUNT = 'SET_PLUS_HABIT_COUNT',
  SET_MINUS_HABIT_COUNT = 'SET_MINUS_HABIT_COUNT',
  SET_HABIT_CHANGE_TASK = 'SET_HABIT_CHANGE_TASK',
  SET_DELETE_HABIT_TASK = 'SET_DELETE_HABIT_TASK',
}

interface setHabitItemsType {
  type: habitActionsType.SET_HABIT_ITEMS;
  payload: habitItemsType;
}

interface setHabitSuccessTaskType {
  type: habitActionsType.SET_HABIT_SUCCESS_TASK;
  payload: number;
}

interface setPlusHabitCountType {
  type: habitActionsType.SET_PLUS_HABIT_COUNT;
  payload: number;
}

interface setMinusHabitCountType {
  type: habitActionsType.SET_MINUS_HABIT_COUNT;
  payload: number;
}

interface setHabitChangeTaskType {
  type: habitActionsType.SET_HABIT_CHANGE_TASK;
  id: number;
  isBadTask: boolean;
  isSucsessTask: boolean;
  titleText: string;
  supText: string;
  diff: number;
}

interface setDeleteHabitTaskType {
  type: habitActionsType.SET_DELETE_HABIT_TASK;
  payload: number;
}
export type habitActions =
  | setHabitItemsType
  | setHabitSuccessTaskType
  | setPlusHabitCountType
  | setMinusHabitCountType
  | setHabitChangeTaskType
  | setDeleteHabitTaskType;
