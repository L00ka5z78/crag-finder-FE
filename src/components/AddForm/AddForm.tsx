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

      <p>
        <label>
          Routes: <br />
          <input type="number" name="name" required maxLength={99} />
        </label>
      </p>

      <p>
        <label>
          Description: <br />
          <input type="text" name="name" required maxLength={99} />
        </label>
      </p>

      <p>
        <label>
          Link: <br />
          <input type="text" name="name" required maxLength={99} />
        </label>
      </p>

      <p>
        <label>
          Latitude: <br />
          <input type="text" name="name" required maxLength={99} />
        </label>
      </p>

      <p>
        <label>
          Longitude: <br />
          <input type="text" name="name" required maxLength={99} />
        </label>
      </p>
    </form>
  );
};
