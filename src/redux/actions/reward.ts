/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { rewardActions, rewardActionsType, rewardItemsType } from '../typesRedux/reward';

export const setRewardItems = (payload: rewardItemsType): rewardActions => {
  return { type: rewardActionsType.SET_REWARD_ITEMS, payload };
};

export const setRewardChangeTask = (
  id: number,
  titleText: string,
  supText: string,
  cost: number,
): rewardActions => {
  return { type: rewardActionsType.SET_REWARD_CHANGE_TASK, id, titleText, supText, cost };
};

export const setDeleteRewardTask = (payload: number): rewardActions => {
  return { type: rewardActionsType.SET_DELETE_REWARD_TASK, payload };
};
