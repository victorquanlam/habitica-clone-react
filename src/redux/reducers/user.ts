import { userActions, userActionsType, userState } from '../typesRedux/user';

const initialState: userState = {
  levelPoint: 0,
  healthPoint: 50,
  level: 1,
  maxLevelPoint: 25,
  maxHealthPoint: 50,
  money: 0,
};

export const user = (state = initialState, action: userActions): userState => {
  switch (action.type) {
    case userActionsType.SET_USER_LEVEL:
      return { ...state, levelPoint: state.levelPoint + action.payload };
    case userActionsType.SET_MINUS_USER_LEVEL:
      return { ...state, levelPoint: state.levelPoint - action.payload };
    case userActionsType.SET_RESET_USER_LEVEL:
      return { ...state, levelPoint: 0 };
    case userActionsType.SET_USER_HEALTH:
      return { ...state, healthPoint: state.healthPoint + action.payload };
    case userActionsType.SET_MINUS_USER_HEALTH:
      return { ...state, healthPoint: state.healthPoint - action.payload };
    case userActionsType.SET_RESET_USER_HEALTH:
      return { ...state, healthPoint: 50 };
    case userActionsType.SET_USER_MONEY:
      return { ...state, money: state.money + action.payload };
    case userActionsType.SET_MINUS_USER_MONEY:
      return { ...state, money: state.money - action.payload };
    case userActionsType.SET_INCREASE_USER_LEVEL_POINT:
      return { ...state, maxLevelPoint: Math.floor(state.maxLevelPoint * 1.4) };
    case userActionsType.SET_INCREASE_USER_LEVEL:
      return { ...state, level: state.level + 1 };
    default:
      return state;
  }
};
