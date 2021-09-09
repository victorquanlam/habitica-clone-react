type goalItemsType = {
  id: number;
  category: string;
  titleText: string;
  isCompletedTask: boolean;
  diff: number;
  supText: string;
  remainDay: number;
};

export interface goalState {
  items: goalItemsType[];
}

export enum goalActionsType {
  SET_GOAL_ITEMS = 'SET_GOAL_ITEMS',
  SET_GOAL_SUCCESS_TASK = 'SET_GOAL_SUCCESS_TASK',
  SET_GOAL_CHANGE_TASK = 'SET_GOAL_CHANGE_TASK',
  SET_DELETE_GOAL_TASK = 'SET_DELETE_GOAL_TASK',
  SET_GOAL_CHANGE_CATEGORY = 'SET_GOAL_CHANGE_CATEGORY',
}

interface setGoalItemsType {
  type: goalActionsType.SET_GOAL_ITEMS;
  payload: any;
}
interface setGoalSuccessType {
  type: goalActionsType.SET_GOAL_SUCCESS_TASK;
  payload: number;
}

interface setGoalChangeType {
  type: goalActionsType.SET_GOAL_CHANGE_TASK;
  id: number;
  titleText: string;
  supText: string;
  diff: number;
  remainDay: number;
}

interface setDeleteGoalTaskType {
  type: goalActionsType.SET_DELETE_GOAL_TASK;
  payload: number;
}

interface setGoalChangeCategoryType {
  type: goalActionsType.SET_GOAL_CHANGE_CATEGORY;
  id: number;
  category: string;
}

export type goalActions =
  | setGoalItemsType
  | setGoalSuccessType
  | setGoalChangeType
  | setDeleteGoalTaskType
  | setGoalChangeCategoryType;
