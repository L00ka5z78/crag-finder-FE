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

export const AuthProvider: React.FC<Props> = ({ children }) => {};

export default AuthContext;

//no idea how to deal with so many details..
