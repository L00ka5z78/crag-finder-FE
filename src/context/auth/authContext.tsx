import { createContext, useReducer } from 'react';

type Props = {
  children: React.ReactNode;
};

const initialState = {
  user: null,
  isLoading: false,
};

const AuthContext = createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
};

export default AuthContext;
