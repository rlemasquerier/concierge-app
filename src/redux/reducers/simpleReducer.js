// @flow

export default (state: Object = {}, action: { type: string, payload: Object }) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
