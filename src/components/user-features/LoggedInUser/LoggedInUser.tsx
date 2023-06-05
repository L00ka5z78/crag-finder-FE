import { useContext } from 'react';
import { UserRole } from './user-role';
import AuthContext from '../../../context/auth/authContext';
import { UserHeader } from '../../../components/layout';

export const LoggedInUser = () => {
  //Context
  const { state: authState } = useContext(AuthContext);
  const user = authState.user;

  if (user && user.id) {
    return (
      <UserHeader id={user.id} email={user.email} role={UserRole[user.role]} />
    );
  } else {
    //@TODO logout feature
    return <h1>Todo LogOut</h1>;
  }
};
