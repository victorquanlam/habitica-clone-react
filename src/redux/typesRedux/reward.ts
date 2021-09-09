export type rewardItemsType = {
  id?: number;
  titleText: string;
  supText?: string;
  cost: number;
  category: string;
};

export interface rewardState {
  items: rewardItemsType[];
}

export enum rewardActionsType {
  SET_REWARD_ITEMS = 'SET_REWARD_ITEMS',
  SET_REWARD_CHANGE_TASK = 'SET_REWARD_CHANGE_TASK',
  SET_DELETE_REWARD_TASK = 'SET_DELETE_REWARD_TASK',
}

interface setRewardItemsType {
  type: rewardActionsType.SET_REWARD_ITEMS;
  payload: any;
}

interface setRewardChangeTaskType {
  type: rewardActionsType.SET_REWARD_CHANGE_TASK;
  id: number;
  titleText: string;
  supText: string;
  cost: number;
}

interface setDeleteRewardTaskType {
  type: rewardActionsType.SET_DELETE_REWARD_TASK;
  payload: number;
}

export type rewardActions = setRewardItemsType | setRewardChangeTaskType | setDeleteRewardTaskType;
