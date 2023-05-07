import React, {
  FormEvent,
  FormEventHandler,
  useContext,
  useState,
} from 'react';
import './Header.css';
import { Btn } from '../common/index';
import { SearchContext } from '../../../context/search.context';

export const Header = () => {
  const { search, setSearch } = useContext(SearchContext);
  const [inputValue, setInputValue] = useState(search);

  const setStateFromLocalState = (e: FormEvent) => {
    e.preventDefault();
    setSearch(inputValue);
  };

  return (
    <header>
      <h1>
        <strong>CRAG </strong> finder
      </h1>
      <Btn text="Add crag to climbing community"></Btn>
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
