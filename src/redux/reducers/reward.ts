import { rewardActions, rewardActionsType, rewardState } from '../typesRedux/reward';

const initialState: rewardState = {
  items: [
    {
      id: 0,
      titleText: 'Reward yourself',
      supText: 'Watch TV, play games, eat goodies, its up to you!',
      cost: 10,
      category: 'season',
    },
  ],
};

export const reward = (state = initialState, action: rewardActions): rewardState => {
  switch (action.type) {
    case rewardActionsType.SET_REWARD_ITEMS:
      return { ...state, items: [...state.items, action.payload] };
    case rewardActionsType.SET_REWARD_CHANGE_TASK:
      return {
        ...state,
        items: state.items.map((item: any) =>
          item.id === action.id
            ? {
                ...item,
                titleText: action.titleText,
                supText: action.supText,
                cost: action.cost,
              }
            : item,
        ),
      };
    case rewardActionsType.SET_DELETE_REWARD_TASK:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
