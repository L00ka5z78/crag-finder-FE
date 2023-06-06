import { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import AuthContext from '../../../context/auth/authContext';
import { useNavigate } from 'react-router-dom';
import { userRoutes } from '../../../routes';
import LoadingSpinner from '../../../components/layout/Spinner/Spinner';
import { InfoModal } from '../InfoModal/InfoModal';
import { PageHeader } from '../../../components/layout';
import { messages } from './messages';
import { AuthSignIn } from './auth/AuthSignIn';

import { User } from '../../../context';
import { UserLoginResponse } from 'types';

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

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch({ type: 'SET_LOADING' });

    try {
      /** @TODO: implement response from AXIOS instead of fetch and move all to separated custom hook and move to separate files */

      const res = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 200) {
        const userData = (await res.json()) as UserLoginResponse;

        const user: User = {
          id: userData.id as string,
          email: userData.email,
          role: userData.role as number,
        };
        dispatch({ type: 'SET_USER', payload: user });
        setModalLink('/logged-in-user');
      } else if (res.status === 401) {
        openModal(formatMessage(messages.modalText.error401));
        return;
      }
    } catch (error: unknown) {
      openModal(formatMessage(messages.modalText.errorUnknown));
      console.log('Error: ', error);
      return;
    } finally {
      dispatch({ type: 'CLEAR_LOADING' });
    }
  };

  if (authState.isLoading) {
    return <LoadingSpinner isLoadingPage={true} />;
  }

  return (
    <>
      <InfoModal
        modalVisible={modalVisible}
        modalText={modalText}
        linkPath={modalLink}
        closeModal={closeModal}
      />
      {authState.isLoading ? (
        <LoadingSpinner isLoadingPage={true} />
      ) : (
        <>
          <PageHeader
            title={formatMessage(messages.pageHeader.title)}
            info={formatMessage(messages.pageHeader.info)}
            link={userRoutes.signUp}
            linkText={formatMessage(messages.pageHeader.linkText)}
          />
          <AuthSignIn
            onSubmit={onSubmit}
            onChange={onChange}
            email={email}
            password={password}
          />
        </>
      )}
    </>
  );
};
