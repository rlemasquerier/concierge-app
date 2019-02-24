// @flow

export const simpleAction = () => (dispatch: Function): Function => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action',
  });
};
