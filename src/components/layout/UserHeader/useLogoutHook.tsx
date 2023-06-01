import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../../context/auth/authContext';
import { logout } from '../../../services';
import { userRoutes } from '../../../routes';

export const useLogoutHook = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const handleLogOut = async () => {
    const response = await logout();
    if (response?.status === 200) {
      dispatch({ type: 'RESET_USER' });
      navigate(userRoutes.home);
    }
  };
  return { handleLogOut };
};
