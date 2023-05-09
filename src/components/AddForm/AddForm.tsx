import { format } from 'path';
import React, { useState } from 'react';

import './AddForm.css';

export const AddForm = () => {
  return (
    <form className="add-form">
      <h1>Adding new crag</h1>
      <p>
        <label>
          Name: <br />
          <input type="text" name="name" required maxLength={99} />
        </label>
      </p>
    </form>
  );
};
