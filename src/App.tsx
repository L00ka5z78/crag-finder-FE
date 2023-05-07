import React, { useState } from 'react';
import { Header } from './components/layout/Header/Header';
import { Map } from './components/layout/Map/Map';
import { SearchContext } from './context/search.context';

export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className="wrapper">
          <Header />
          <Map />
        </div>
      </SearchContext.Provider>
    </>
  );
};
