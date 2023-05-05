import React from 'react';
import { Header } from './components/layout/Header/Header';
import { Map } from './components/layout/Map/Map';

export const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Map />
      </div>
    </>
  );
};
