import { useNavigate } from 'react-router-dom';

import { userRoutes } from '../../../routes/endpoints';

import './Home.css';

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="homeWrapper" data-testid="home-test">
      <h1 className="homeTitle">HOME</h1>
      <div className="homeButtonWrapper">
        <button
          className="homeButton"
          onClick={() => navigate(userRoutes.signIn)}
        >
          Sing In
        </button>
        <button
          className="homeButton"
          onClick={() => navigate(userRoutes.signUp)}
        >
          Sing Up
        </button>
      </div>
    </div>
  );
};
