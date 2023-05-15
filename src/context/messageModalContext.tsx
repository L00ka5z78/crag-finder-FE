import {
  FC,
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from 'react';
import { IMessageModalContextProps } from './interfaces/modalsInterfaces';

const MessageModalContext = createContext<IMessageModalContextProps>({
  messageModal: {
    isOpen: false,
    message: '',
    isError: false,
  },
  setMessageModal: () => {
    return null;
  },
});

const MessageModalContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [messageModal, setMessageModal] = useState({
    isOpen: false,
    message: '',
    isError: false,
  });

  return (
    <MessageModalContext.Provider value={{ messageModal, setMessageModal }}>
      {children}
    </MessageModalContext.Provider>
  );
};

const useMessageModal = () => {
  const { messageModal, setMessageModal } = useContext(MessageModalContext);

  const closeMessageModal = () =>
    setMessageModal((prevState) => ({ ...prevState, isOpen: false }));

  const openMessageModal = (message: string, isError = false) => {
    setMessageModal((prevState) => ({
      ...prevState,
      isOpen: true,
      isError,
      message,
    }));
  };
  return { messageModal, setMessageModal, closeMessageModal, openMessageModal };
};

export { MessageModalContextProvider, useMessageModal };
