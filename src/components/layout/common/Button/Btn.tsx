import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import './Btn.css';
import { Link } from 'react-router-dom';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  // text: string;
  children: ReactNode;
  to?: string;
}

export const Btn = ({ children, to, ...rest }: Props) =>
  to ? (
    <Link className="btn" to={to}>
      {children}
    </Link>
  ) : (
    <button className="button" {...rest}>
      {children}
    </button>
  );
