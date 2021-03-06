import * as actionTypes from 'actions';

const initialState = {
  loggedIn: false,
  user: {}
};

const sessionReducer = (state = initialState, action) => {
  console.log(action.type);
  console.log(action.payload);
  switch (action.type) {
    case actionTypes.SESSION_LOGIN: {
      if (action.payload) {
        return { loggedIn: true, user: action.payload };
      } else {
        return { ...state, loggedIn: false, user: {} };
      }
    }
    case actionTypes.SESSION_LOGOUT: {
      return { ...state, loggedIn: false, user: {} };
    }
    default: {
      return state;
    }
  }
};

export default sessionReducer;
