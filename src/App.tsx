import React, { useState } from 'react';
import { Header } from './components/layout/Header/Header';
import { Map } from './components/layout/Map/Map';
import { SearchContext } from './context/search.context';
import { Route, Routes } from 'react-router-dom';

export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Map />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </>
  );
};
