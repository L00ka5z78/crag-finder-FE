import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';

import { logout } from '../../../services';
import { userRoutes } from '../../../routes';

export const useLogoutHook = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogOut = async () => {};
  return { handleLogOut };
};
