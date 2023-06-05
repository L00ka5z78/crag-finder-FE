import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { userRoutes } from './endpoints';
import {
  Home,
  LoggedInUser,
  SignIn,
  SignUp,
} from '../components/user-features';

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path={userRoutes.home} element={<Home />} />
        <Route path={userRoutes.signIn} element={<SignIn />} />
        <Route path={userRoutes.signUp} element={<SignUp />} />
        <Route path={userRoutes.loggedInUser} element={<LoggedInUser />} />
      </Routes>
    </Router>
  );
};
