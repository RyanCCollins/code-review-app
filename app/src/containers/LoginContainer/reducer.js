import * as types from './constants';

export const initialState = {
  errors: [],
};

const loginReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.DEFAULT_ACTION:
        return state;
      default:
        return state;
    }
  };

export default loginReducer;
