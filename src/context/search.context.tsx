import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { ISearchContextProps } from './interfaces/modalsInterfaces';

const SearchContext = createContext<ISearchContextProps>({
  search: '',
  setSearch: (search: string) => {
    return;
  },
});

const SearchContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [search, setSearch] = useState('');

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => {
  const { search, setSearch } = useContext(SearchContext);

  return { search, setSearch };
};

export { SearchContextProvider, useSearch };
