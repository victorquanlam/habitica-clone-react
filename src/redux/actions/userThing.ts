/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { userThingActions, userThingActionsType, userThingItemType } from '../typesRedux/userThing';

export const setUserThing = (payload: userThingItemType): userThingActions => {
  return { type: userThingActionsType.SET_USER_THING, payload };
};
