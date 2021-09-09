/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { userActions, userActionsType } from '../typesRedux/user';

export const setUserLevel = (payload: number): userActions => {
  return { type: userActionsType.SET_USER_LEVEL, payload };
};

export const setMinusUserLevel = (payload: number): userActions => {
  return { type: userActionsType.SET_MINUS_USER_LEVEL, payload };
};

export const setResetUserLevel = (): userActions => {
  return { type: userActionsType.SET_RESET_USER_LEVEL };
};

export const setUserHealth = (payload: number): userActions => {
  return { type: userActionsType.SET_USER_HEALTH, payload };
};

export const setMinusUserHealth = (payload: number): userActions => {
  return { type: userActionsType.SET_MINUS_USER_HEALTH, payload };
};

export const setResetUserHealth = (): userActions => {
  return { type: userActionsType.SET_RESET_USER_HEALTH };
};

export const setUserMoney = (payload: number): userActions => {
  return { type: userActionsType.SET_USER_MONEY, payload };
};

export const setMinusUserMoney = (payload: number): userActions => {
  return { type: userActionsType.SET_MINUS_USER_MONEY, payload };
};

export const setIncreaseUserLevelPoint = (): userActions => {
  return { type: userActionsType.SET_INCREASE_USER_LEVEL_POINT };
};

export const setIncreaseUserLevel = (): userActions => {
  return { type: userActionsType.SET_INCREASE_USER_LEVEL };
};
