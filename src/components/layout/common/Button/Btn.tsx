import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Btn.css';
import { Link } from 'react-router-dom';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  to?: string;
}

export const Btn = ({ children, to, ...rest }: Props) =>
  to ? (
    <Link className="button" to={to}>
      {children}
    </Link>
  ) : (
    <button className="button" {...rest}>
      {children}
    </button>
  );
