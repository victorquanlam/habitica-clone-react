export type userThingItemType = {
  category: string;
  name: string;
  price: number;
  img: string;
};

export interface userThingState {
  items: userThingItemType[];
}

export enum userThingActionsType {
  SET_USER_THING = 'SET_USER_THING',
}

interface setRewardItemsType {
  type: userThingActionsType.SET_USER_THING;
  payload: userThingItemType;
}

export type userThingActions = setRewardItemsType;
