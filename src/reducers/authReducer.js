import { LOG_IN, LOG_OUT } from '../actions/types';
import { login, logout } from '../actions/functions';

const initialState = {
  loggedIn: false
};

function authReducer(state = initialState, action ) {
  switch(action.type) {
    case LOG_IN:
      return login(state, action);
      case LOG_OUT:
        return logout(state, action);
    default:
      return state;
  }
}

export default authReducer;