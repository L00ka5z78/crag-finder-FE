import { useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import AuthContext from '../../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { userRoutes } from '../../../routes';
import LoadingSpinner from '../../../components/layout/Spinner/Spinner';

export const SignIn = () => {
  const { formatMessage } = useIntl();

  // Local state
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [modalLink, setModalLink] = useState<string>('');

  // Context
  const { state: authState, dispatch } = useContext(AuthContext);

  // Modal operations
  const openModal = (text: string) => {
    setModalText(text);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  // Navigate
  const navigate = useNavigate();

  //UseEffect
  useEffect(() => {
    if (authState.user) {
      navigate(userRoutes.loggedInUser);
    }
    if (authState.user === undefined) {
      navigate(userRoutes.signIn);
    }
  }, [authState.user, navigate]);

  if (authState.isLoading) {
    return <LoadingSpinner isLoadingPage={true} />;
  }

  return null; //temporary
};
