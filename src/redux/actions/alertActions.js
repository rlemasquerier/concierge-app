// @flow

import { alertConstants } from '../constants';

type Action = {
  +type: string,
};

export const alertActions = {
  success,
  error,
  clear,
};

function success(message: string): Action {
  return { type: alertConstants.SUCCESS, message };
}

function error(message: string): Action {
  return { type: alertConstants.ERROR, message };
}

function clear(): Action {
  return { type: alertConstants.CLEAR };
}
