import React from 'react';
import './Header.css';
import { Btn } from '../common/index';

export const Header = () => (
  <header>
    <h1>
      <strong>CRAG </strong> finder
    </h1>
    <Btn text="Add crag to climbing community"></Btn>
    <div className="search">
      <input type="text" />
      <Btn text="Search for crags" />
    </div>
  </header>
);
