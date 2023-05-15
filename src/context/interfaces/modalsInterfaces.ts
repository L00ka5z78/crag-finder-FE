import { Dispatch, SetStateAction } from 'react';

export interface IAddFormModalContextProps {
  addFormModalIsOpen: boolean;
  setAddFormModalIsOpen: (isOpen: boolean) => void;
}

export interface IMessageModalContextProps {
  messageModal: {
    isOpen: boolean;
    message: string;
    isError: boolean;
  };
  setMessageModal: Dispatch<
    SetStateAction<{
      isOpen: boolean;
      message: string;
      isError: boolean;
    }>
  >;
}

export interface ISearchContextProps {
  search: string;
  setSearch: (search: string) => void;
}
