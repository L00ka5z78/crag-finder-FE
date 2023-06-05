import { useContext } from 'react';
import { UserRole } from './user-role';
// import AuthContext from "src/context/auth/authContext";

export const LoggedInUser = () => {
  //Context
  const { state: authState } = useContext(AuthContext);
  const user = authState.user;

  if (user && user.id) {
    return (
      <HeaderUser id={user.id} email={user.email} role={UserRole[user.role]} />
    );
  } else {
    //@TODO implementacjia wylogowania
    return <h1>Todo LogOut</h1>;
  }
};
