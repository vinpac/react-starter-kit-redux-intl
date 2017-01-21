import { ACTION } from '../../actions/AuthActions';

const initialState = {};

const AuthUser = (state = initialState, action = {}) => {
  switch (action.type) {
    case ACTION.LOGIN:
      return {
        user: action.user,
      };
    default:
      return state;
  }
};

export default AuthUser;
