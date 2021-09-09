import { goalActions, goalActionsType, goalState } from '../typesRedux/goal';

const initialState: goalState = {
  items: [
    {
      id: 0,
      category: 'active',
      titleText: 'Stretching> Daily Workout',
      supText: '',
      isCompletedTask: false,
      diff: 1,
      remainDay: 0,
    },
  ],
};

export const goal = (state = initialState, action: goalActions): goalState => {
  switch (action.type) {
    case goalActionsType.SET_GOAL_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    case goalActionsType.SET_GOAL_SUCCESS_TASK:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.payload
            ? { ...item, isCompletedTask: true, category: 'completed' }
            : item,
        ),
      };
    case goalActionsType.SET_GOAL_CHANGE_TASK:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.id
            ? {
                ...item,
                titleText: action.titleText,
                supText: action.supText,
                diff: action.diff + 1,
                remainDay: action.remainDay,
              }
            : item,
        ),
      };
    case goalActionsType.SET_DELETE_GOAL_TASK:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    case goalActionsType.SET_GOAL_CHANGE_CATEGORY:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.id ? { ...item, category: action.category } : item,
        ),
      };
    default:
      return state;
  }
};
