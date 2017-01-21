export const ACTION = {
  FETCH: {
    START: 'AUTH_FETCH_START',
    FAIL: 'AUTH_FETCH_FAIL',
    SUCCESS: 'AUTH_FETCH_SUCCESS',
  },
  LOGIN: 'AUTH_LOGIN',
};

export function login(user) {
  return {
    type: ACTION.LOGIN,
    user,
  };
}
