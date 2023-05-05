import React from 'react';
import './App.css';

export const App = () => {
  return (
    <>
      <header>
        <h1>
          <strong>CRAG </strong> finder
        </h1>
        <button>Add crag to climbing community</button>
        <div className="search">
          <input type="text" />
          <button>Search for crags</button>
        </div>
      </header>
      <div className="map">************</div>
    </>
  );
};
