// @flow
import axios from 'axios';

type Credentials = { mail: string, password: string };

type LoginResponse = {
  id: string,
  token: string,
  mail: string,
  role: string,
};

type LoginAction = {
  type: 'AUTH.LOGIN_SUCCESS',
  payload: LoginResponse,
};

const createLoginAction = (payload: LoginResponse): LoginAction => ({
  type: 'AUTH.LOGIN_SUCCESS',
  payload,
});

export const login = (credentials: Credentials) => async (dispatch: Function) => {
  try {
    const response = await axios.post('http://localhost:3000/admin/login', credentials);
    const result = {
      id: response.data.result._id,
      token: response.data.token,
      mail: response.data.result.mail,
      role: response.data.result.role,
    };
    dispatch(createLoginAction(result));
    return result;
  } catch (error) {
    console.log(error);
  }
};
