import React from 'react';

import './AddForm.css';
import { Btn } from '../layout/common';

export const AddForm = () => {
  return (
    <form className="add-form">
      <h1>Add new crag</h1>
      <p>
        <label>
          Name: <br />
          <input type="text" name="name" required maxLength={99} />
        </label>
      </p>

      <p>
        <label>
          Description: <br />
          <textarea name="description" required maxLength={999} />{' '}
        </label>
      </p>
      <p>
        <label>
          Routes count: <br />
          <input type="number" name="routes" required maxLength={99} />
          <small> * Leave zero in that field, if crag has no routes</small>
        </label>
      </p>

      <p>
        <label>
          Crags URL address (if exists): <br />
          <input type="url" name="url" maxLength={99} />
        </label>
      </p>

      <p>
        <label>
          Crags position (GPS coordinates): <br />
          <input type="text" name="name" required maxLength={99} />
        </label>
      </p>

      <p>
        <label>
          Accomodation URL address (optional): <br />
          <input type="url" name="accomodation" />
        </label>
      </p>
      <Btn text="Save" />
    </form>
  );
};
