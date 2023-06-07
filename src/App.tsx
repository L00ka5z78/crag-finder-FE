import React, { useContext, useEffect } from 'react';
import AuthContext from './context/auth/authContext';
import { AppRoutes } from './routes';
import { getUserWithCookie } from './context';
import { TranslationProvider } from './services';

import { Header } from './components/layout/Header/Header';
import { Map } from './components/layout/Map/Map';
import { Outlet } from 'react-router-dom';
import {
  AddFormModalContextProvider,
  MessageModalContextProvider,
  SearchContextProvider,
} from './context';
import LoadingSpinner from './components/layout/Spinner/Spinner';

export const App = () => {
  const { state: authState, dispatch } = useContext(AuthContext);

  useEffect(() => {
    (async () => {
      dispatch({ type: 'SET_LOADING' });

      const user = await getUserWithCookie();

      if (user) {
        dispatch({ type: 'SET_USER', payload: user });
      } else {
        dispatch({ type: 'RESET_USER' });
      }

      dispatch({ type: 'CLEAR_LOADING' });
    })();
  }, [dispatch]);

  if (authState.isLoading) return <LoadingSpinner isLoadingPage={true} />;

  return (
    <>
      <MessageModalContextProvider>
        <SearchContextProvider>
          <AddFormModalContextProvider>
            <div className="wrapper">
              <Header />
              <div id="detail">
                <Outlet />
              </div>
              <Map />
            </div>
          </AddFormModalContextProvider>
        </SearchContextProvider>
      </MessageModalContextProvider>

      {/* <TranslationProvider>
        <AppRoutes />
      </TranslationProvider> */}
    </>
  );
};
/** trying to combine and connect both features. no success yet. bunch of errors
 *
 *  cannot render a <Router> inside another <Router>. You should never have more than one in your app 06.06 09:31 problem occurs because it was duplicate router in routes,tsx file and index.ts. now its fixed, but error is still there 07.06 08:38
 */
