import React from 'react';
import { Header } from './components/layout/Header/Header';
import { Map } from './components/layout/Map/Map';
import { Outlet } from 'react-router-dom';
import {
  AddFormModalContextProvider,
  MessageModalContextProvider,
  SearchContextProvider,
} from './context';

export const App = () => {
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
    </>
  );
};
