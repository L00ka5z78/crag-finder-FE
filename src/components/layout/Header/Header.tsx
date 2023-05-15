import React, { FormEvent, useContext, useState } from 'react';
import './Header.css';
import { Btn, Input } from '../common/index';
import { useSearch, useAddFormModal } from '../../../context';
import { Link } from 'react-router-dom';

export const Header = () => {
  const { search, setSearch } = useSearch();
  const { openAddForm } = useAddFormModal();
  const [inputValue, setInputValue] = useState(search);

  const setStateFromLocalState = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  // return (
  //   <header>
  //     <h1>
  //       <Link className="link" to={'/'}>
  //         <strong>CRAG</strong> finder
  //       </Link>
  //     </h1>
  //     <Btn to="/add" text="Add New Crag" />
  //     <form className="search" onSubmit={setStateFromLocalState}>
  //       <input
  //         type="text"
  //         value={inputValue}
  //         onChange={(e) => setInputValue(e.target.value)}
  //       />
  //       <Btn text="Search for crags" />
  //     </form>
  //   </header>
  // );

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
