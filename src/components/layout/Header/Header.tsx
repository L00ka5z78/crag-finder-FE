import React, { FormEvent, useContext, useState } from 'react';
import './Header.css';
import { Btn } from '../common/index';
import { useSearch, useAddFormModal } from '../../../context/search.context';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { search, setSearch } = useSearch();
  const [inputValue, setInputValue] = useState(search);

  const setStateFromLocalState = (e: FormEvent) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  return (
    <header>
      <h1>
        <Link className="link" to={'/'}>
          <strong>CRAG</strong> finder
        </Link>
      </h1>
      <Btn to="/add" text="Add New Crag" />
      <form className="search" onSubmit={setStateFromLocalState}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Btn text="Search for crags" />
      </form>
    </header>
  );
};
