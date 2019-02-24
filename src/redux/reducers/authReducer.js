// @flow

export default (state: Object = {}, action: { type: string, payload: Object }) => {
  switch (action.type) {
    case 'AUTH.LOGIN_SUCCESS':
      return {
        user: action.payload,
      };
    default:
      return state;
  }
};
