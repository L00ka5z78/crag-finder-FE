import { clientApi } from '../clientApi';
import { ENDPOINTS } from './authEndpoints';
import { ILoginCredentials } from './login-credentials';

export const login = async (credentials: ILoginCredentials) => {
  try {
    return await clientApi.post(ENDPOINTS.LOGIN, credentials);
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    return await clientApi.post(ENDPOINTS.LOGOUT);
  } catch (e) {
    console.log(e);
  }
};
