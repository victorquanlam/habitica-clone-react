/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { goalActions, goalActionsType } from '../typesRedux/goal';

type goalType = {
  titleText: string;
  id: number;
  category: string;
  isCompletedTask: boolean;
  diff: number;
};

export const setGoalItems = (payload: goalType): goalActions => {
  return { type: goalActionsType.SET_GOAL_ITEMS, payload };
};

export const setGoalSuccessTask = (payload: number): goalActions => {
  return { type: goalActionsType.SET_GOAL_SUCCESS_TASK, payload };
};

export const setGoalChangeTask = (
  id: number,
  titleText: string,
  supText: string,
  diff: number,
  remainDay: number,
): goalActions => {
  return {
    type: goalActionsType.SET_GOAL_CHANGE_TASK,
    id,
    titleText,
    supText,
    diff,
    remainDay,
  };
};

export const setDeleteGoalTask = (payload: number): goalActions => {
  return { type: goalActionsType.SET_DELETE_GOAL_TASK, payload };
};

export const setGoalChangeCategoryTask = (id: number, category: string): goalActions => {
  return { type: goalActionsType.SET_GOAL_CHANGE_CATEGORY, category, id };
};
