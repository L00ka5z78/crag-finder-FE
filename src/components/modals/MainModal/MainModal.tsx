import * as React from 'react';
import ModalReact, { Props as ModalProps } from 'react-modal';
import { ReactNode } from 'react';

import './MainModal.css';

ModalReact.setAppElement('#root');

interface Props extends ModalProps {
  children: ReactNode;
}
export const MainModal = ({ children, ...rest }: Props) => {
  return (
    <ModalReact overlayClassName="overlay" className="content" {...rest}>
      {children}
    </ModalReact>
  );
};
