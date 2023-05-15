import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { IAddFormModalContextProps } from './interfaces/modalsInterfaces';

const AddFormModalContext = createContext<IAddFormModalContextProps>({
  addFormModalIsOpen: false,
  setAddFormModalIsOpen: (isOpen: boolean) => {
    return;
  },
});

const AddFormModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [addFormModalIsOpen, setAddFormModalIsOpen] = useState<boolean>(false);

  return (
    <AddFormModalContext.Provider
      value={{ addFormModalIsOpen, setAddFormModalIsOpen }}
    >
      {children}
    </AddFormModalContext.Provider>
  );
};

const useAddFormModal = () => {
  const { addFormModalIsOpen, setAddFormModalIsOpen } =
    useContext(AddFormModalContext);

  const openAddForm = () => setAddFormModalIsOpen(true);
  const closeAddFormModal = () => setAddFormModalIsOpen(false);

  return {
    addFormModalIsOpen,
    setAddFormModalIsOpen,
    openAddForm,
    closeAddFormModal,
  };
};

export { AddFormModalContextProvider, useAddFormModal };
