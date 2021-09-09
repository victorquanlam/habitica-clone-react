import { dailyActions, dailyActionsType, dailyState } from '../typesRedux/dailyTask';

const initialState: dailyState = {
  items: [
    {
      id: 0,
      category: 'active',
      titleText: 'Work on a creative project',
      supText: 'Click to name your current project and set a schedule!',
      isCompletedTask: false,
      count: 0,
      exp: 10,
      health: 7,
    },
  ],
};

export const dailyTask = (state = initialState, action: dailyActions): dailyState => {
  switch (action.type) {
    case dailyActionsType.SET_DAILY_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    case dailyActionsType.SET_DAILY_SUCCESS_TASK:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.payload
            ? { ...item, isCompletedTask: true, category: 'other', count: item.count + 1 }
            : item,
        ),
      };
    case dailyActionsType.SET_DAILY_DEFAULT_TASK:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.payload
            ? { ...item, isCompletedTask: false, category: 'active', count: item.count - 2 }
            : item,
        ),
      };
    default:
      return state;
  }
};
