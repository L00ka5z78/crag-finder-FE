import { useState } from 'react';
import { useIntl } from 'react-intl';
import { HiOutlineEye, HiOutlineUserCircle } from 'react-icons/hi';
import { MdArrowForwardIos } from 'react-icons/md';

import LoadingSpinner from '../../../components/layout/Spinner/Spinner';
import { messages } from './messages';
import { useFormHook } from '../hooks';
import { useDocumentTitle } from '../hooks/useDocTitle';
import { PagesTitles } from '../../../utils';
import { InfoModal } from '../InfoModal/InfoModal';
import { FormBox, PageHeader } from '../../../components/layout';
import { userRoutes } from '../../../routes';

import '../../../components/layout/common/Form/FormInput/FormInput.css';

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

  const { form, tag, updateValue, errors, submitForm } =
    useFormHook<SignUpForm>({
      email: '',
      password: '',
      password2: '',
    });

  // Set page title
  useDocumentTitle(PagesTitles.SIGN_UP);

  // Modal operations

  const openModal = (text: string) => {
    setModalText(text);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('http://localhost:3001/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (res.status === 201) {
        setModalLink('/');
        openModal('Registration successful! Click OK to login.');
        return;
      } else {
        const errorMsg = String((await res.json()).message);
        openModal(`Error registering new user: ${errorMsg}`);
        return;
      }
    } catch (error: unknown) {
      openModal('Unknown error occurred. Logging to console.');
      console.log('Unknown error...', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <InfoModal
        modalVisible={modalVisible}
        modalText={modalText}
        linkPath={modalLink}
        closeModal={closeModal}
      />
      <PageHeader
        title={formatMessage(messages.pageHeader.title)}
        info={formatMessage(messages.pageHeader.info)}
        link={userRoutes.signIn}
        linkText={formatMessage(messages.pageHeader.linkText)}
      />
      <FormBox>
        <form onSubmit={submitForm(onSubmit)}>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <div className="input-panel">
              <HiOutlineUserCircle className="input-icon" />
              <input
                {...tag('email', { required: true, email: true })}
                type="email"
                value={form.email}
                onChange={updateValue}
                placeholder="Email"
                className="input"
              />
              {errors.email && (
                <div className="input-errors">{errors.email}</div>
              )}
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="password">Password</label>
            <div className="input-panel">
              <HiOutlineEye className="input-icon" />
              <input
                {...tag(
                  'password',
                  { minLength: 4, maxLength: 20 },
                  'Password has to be between 4 and 20 characters long'
                )}
                type="password"
                value={form.password}
                onChange={updateValue}
                placeholder="Password"
                className="input"
              />
              {errors.password && (
                <div className="input-errors">{errors.password}</div>
              )}
            </div>
          </div>

          <div className="input-box">
            <label htmlFor="password2">Repeat Password</label>
            <div className="input-panel">
              <HiOutlineEye className="input-icon" />
              <input
                {...tag(
                  'password2',
                  { equalTo: form.password },
                  'Passwords do not match'
                )}
                type="password"
                value={form.password2}
                onChange={updateValue}
                placeholder="Repeat Password"
                className="input"
              />
              {errors.password2 && (
                <div className="input-errors">{errors.password2}</div>
              )}
              <button className="submitButton" type="submit">
                <MdArrowForwardIos className="arrow-icon" />
              </button>
            </div>
          </div>
        </form>
      </FormBox>
    </>
  );
};
/**@TODO finish styling */
