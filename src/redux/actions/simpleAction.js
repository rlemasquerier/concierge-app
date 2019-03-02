// @flow

export type Action = {
  +type: string,
  +payload: string,
};

type Dispatch = (action: Action) => any;
type ThunkAction = (dispatch: Dispatch) => any;

export const simpleAction = (): ThunkAction => (dispatch: Dispatch): any => {
  dispatch({
    type: 'SIMPLE_ACTION',
    payload: 'result_of_simple_action',
  });
};
