import { ENDPOINTS } from './authEndpoints';
import { ILoginCredentials } from './login-credentials';

export const login = async (credentials: ILoginCredentials) => {
  try {
    return await apiClient.post(ENDPOINTS.LOGIN, credentials);
  } catch (e) {
    console.log(e);
  }
};

export const logout = async () => {
  try {
    return await apiClient.post(ENDPOINTS.LOGOUT);
  } catch (e) {
    console.log(e);
  }
};

// @TODO create apiClient.ts Choose between axios & fetch....
