import * as React from 'react';
import {Btn} from '../../layout/common'
import { MainModal } from '../MainModal';

import './MessageModal.css'

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  isErrorMessage?: boolean;
  message: string;
}
export const MessageModal = ({
  message,
  isOpen,
  closeModal,
  isErrorMessage = false,
}: Props) => {
  const className = isErrorMessage
    ? .messageText + ' ' + .messageError
    : .messageText;
  return (
    <MainModal isOpen={isOpen} onRequestClose={closeModal}>
      <div className='messageBox'>
        <p className={className}>{message}</p>
        <Btn onClick={closeModal}>Return To Home Page</Btn>
      </div>
    </MainModal>
  );
};
