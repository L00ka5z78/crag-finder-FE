import { useEffect, useState } from 'react';
import { UserHeaderProps } from './user-header-props';

import { useLogoutHook } from './useLogoutHook';
import { arrayAvatar, randomAvatar } from '../../../utils';

import './UserHeader.css';

const avatar = randomAvatar(arrayAvatar);

export const UserHeader = ({ id, email, role }: UserHeaderProps) => {
  const [timeLeft, setTimeLeft] = useState(20000);
  const { handleLogOut } = useLogoutHook();

  useEffect(() => {
    let interval: any;

    const resetTimer = () => {
      clearInterval(interval);
      setTimeLeft(20000);
      startTimer();
    };

    const startTimer = () => {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1000);
      }, 1000);
    };

    const handleEvent = () => {
      resetTimer();
    };

    startTimer();

    window.addEventListener('mousemove', handleEvent);
    window.addEventListener('keypress', handleEvent);
    window.addEventListener('click', handleEvent);

    return () => {
      clearInterval(interval);
      window.removeEventListener('mousemove', handleEvent);
      window.removeEventListener('keypress', handleEvent);
      window.removeEventListener('click', handleEvent);
    };
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      handleLogOut();
    }
  }, [timeLeft, handleLogOut]);

  return (
    <header data-testid="header-user-test" className="headerWrapper">
      <div className="headerAvatarWrapper">
        <img src={avatar} alt="Avatar" className="headerAvatarImg" />
      </div>
      <div className="headerInfoWrapper">
        <h1 className="headerInfoTitle">Welcome (email): {email}</h1>
        <p className="headerInfoDetail">Your Id is: {id}</p>
        <p className="headerInfoDetail">Your role is: {role}</p>
        <p className="headerInfoDetail">
          {timeLeft / 1000}s. - Unactivity time until logout...
        </p>
      </div>
      <div className="headerButtonWrapper">
        <button className="headerButton" onClick={handleLogOut}>
          LogOut
        </button>
        <button className="headerButton">Settings</button>
      </div>
    </header>
  );
};
