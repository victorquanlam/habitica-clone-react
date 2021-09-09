import { user } from './user';
import { habitTask } from './habitTask';
import { dailyTask } from './dailyTask';
import { goal } from './goal';
import { reward } from './reward';
import { userThing } from './userThing';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user,
  habitTask,
  dailyTask,
  goal,
  reward,
  userThing,
});

export type RootState = ReturnType<typeof rootReducer>;
