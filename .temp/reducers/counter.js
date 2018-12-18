import { ADD, MINUS } from '../constants/counter';

// 初始值
const INITIAL_ASTATE = {
  num: 0
};

export default function counter(state = INITIAL_ASTATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      };
    case MINUS:
      return {
        ...state,
        num: state.num - 1
      };
    default:
      return state;
  }
};