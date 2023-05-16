import React, { FormEvent, useState } from 'react';
import './Header.css';
import { Btn, Input } from '../common/index';
import { useSearch, useAddFormModal } from '../../../context';

export const Header = () => {
  const { search, setSearch } = useSearch();
  const { openAddForm } = useAddFormModal();
  const [inputValue, setInputValue] = useState(search);

  const setStateFromLocalState = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  return (
    <header>
      <h1>
        <strong>CRAG </strong>finder
      </h1>
      <Btn onClick={openAddForm}>Add New Crag</Btn>
      <form className="search" onSubmit={setStateFromLocalState}>
        <Input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />{' '}
        <Btn>Search for crags</Btn>
      </form>
    </header>
  );
};
