import { UserRole } from '../../../components/user-features/LoggedInUser';

export type User = {
  id: string;
  email: string;
  role: UserRole;
};

// State:
export interface AuthState {
  user: User | null;
  isLoading: boolean;
}

// Reducer actions:
export type AuthActions =
  | { type: 'RESET_USER' }
  | { type: 'SET_USER'; payload: User }
  | { type: 'SET_LOADING' }
  | { type: 'CLEAR_LOADING' };
