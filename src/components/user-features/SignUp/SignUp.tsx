import { useState } from 'react';
import { useIntl } from 'react-intl';
import LoadingSpinner from '../../../components/layout/Spinner/Spinner';

import { messages } from './messages';

type SignUpForm = {
  email: string;
  password: string;
  password2: string;
};

export const SignUp = () => {
  const { formatMessage } = useIntl();

  // Local state and hooks
  const [loading, setLoading] = useState<boolean>(false);

  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>('');
  const [modalLink, setModalLink] = useState<string>('');

  //custom hook??

  // Modal operations

  const openModal = (text: string) => {
    setModalText(text);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  if (loading) {
    return <LoadingSpinner />;
  }
  return null; //temporary
};
