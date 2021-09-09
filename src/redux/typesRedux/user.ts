export interface userState {
  levelPoint: number;
  healthPoint: number;
  money: number;
  level: number;
  maxHealthPoint: number;
  maxLevelPoint: number;
}

export enum userActionsType {
  SET_USER_LEVEL = 'SET_USER_LEVEL',
  SET_MINUS_USER_LEVEL = 'SET_MINUS_USER_LEVEL',
  SET_RESET_USER_LEVEL = 'SET_RESET_USER_LEVEL',
  SET_USER_HEALTH = 'SET_USER_HEALTH',
  SET_MINUS_USER_HEALTH = 'SET_MINUS_USER_HEALTH',
  SET_RESET_USER_HEALTH = 'SET_RESET_USER_HEALTH',
  SET_USER_MONEY = 'SET_USER_MONEY',
  SET_MINUS_USER_MONEY = 'SET_MINUS_USER_MONEY',
  SET_INCREASE_USER_LEVEL_POINT = 'SET_INCREASE_USER_LEVEL_POINT',
  SET_INCREASE_USER_LEVEL = 'SET_INCREASE_USER_LEVEL',
}

interface setUserLevelType {
  type: userActionsType.SET_USER_LEVEL;
  payload: number;
}

interface setMinusUserLevelType {
  type: userActionsType.SET_MINUS_USER_LEVEL;
  payload: number;
}

interface setResetUserLevelType {
  type: userActionsType.SET_RESET_USER_LEVEL;
}

interface setUserHealthType {
  type: userActionsType.SET_USER_HEALTH;
  payload: number;
}

interface setMinusUserHealthType {
  type: userActionsType.SET_MINUS_USER_HEALTH;
  payload: number;
}

interface setResetUserHealthType {
  type: userActionsType.SET_RESET_USER_HEALTH;
}

interface setMoneyUserType {
  type: userActionsType.SET_USER_MONEY;
  payload: number;
}

interface setMinusMoneyUserType {
  type: userActionsType.SET_MINUS_USER_MONEY;
  payload: number;
}

interface setIncreaseUserLevelPointType {
  type: userActionsType.SET_INCREASE_USER_LEVEL_POINT;
}

interface setIncreaseUserLevelType {
  type: userActionsType.SET_INCREASE_USER_LEVEL;
}
export type userActions =
  | setUserHealthType
  | setUserLevelType
  | setMinusUserLevelType
  | setResetUserLevelType
  | setMinusUserHealthType
  | setResetUserHealthType
  | setMoneyUserType
  | setMinusMoneyUserType
  | setIncreaseUserLevelPointType
  | setIncreaseUserLevelType;
