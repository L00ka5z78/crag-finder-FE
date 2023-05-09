import React, { useState } from 'react';
import { Header } from './components/layout/Header/Header';
import { Map } from './components/layout/Map/Map';
import { SearchContext } from './context/search.context';
import { Route, Routes } from 'react-router-dom';
import { AddForm } from './components/AddForm/AddForm';

export const App = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<Map />} />
            <Route path="/add" element={<AddForm />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </>
  );
};
