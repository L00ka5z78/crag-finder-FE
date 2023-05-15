import { Dispatch, SetStateAction } from 'react';

export interface AddFormModalContextProps {
  addFormModalIsOpen: boolean;
  setAddFormModalIsOpen: (isOpen: boolean) => void;
}

export interface MessageModalContextProps {
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

export interface SearchContextProps {
  search: string;
  setSearch: (search: string) => void;
}
