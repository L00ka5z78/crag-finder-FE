import { createContext, useReducer } from 'react';
import { AuthActions } from './types';
import authReducer from './authReducer';

type Props = {
  children: React.ReactNode;
};

const initialState = {
  user: null,
  isLoading: false,
};

const AuthContext = createContext<{
  state: any;
  dispatch: React.Dispatch<AuthActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state: { ...state }, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
