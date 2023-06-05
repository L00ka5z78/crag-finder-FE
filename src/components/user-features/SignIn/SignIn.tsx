import { useContext, useState } from 'react';
import { useIntl } from 'react-intl';
import AuthContext from '../../../context/auth/authContext';

export const SignIn = () => {
  const { formatMessage } = useIntl();

  // Local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  // Context
  const { state: authState, dispatch } = useContext(AuthContext);

  return null; //temporary
};
