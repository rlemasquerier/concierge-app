// @flow

export const simpleAction = () => (dispatch: Function): any => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action',
  });
};
