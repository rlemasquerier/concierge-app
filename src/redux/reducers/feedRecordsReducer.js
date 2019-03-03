// @flow

export default (state: Object = {}, action: { type: string, payload: Object }) => {
  switch (action.type) {
    case 'FETCH_RECORDS_SUCCESS':
      return {
        feedRecords: action.payload,
      };
    default:
      return state;
  }
};
