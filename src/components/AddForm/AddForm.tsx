import React, { FormEvent, useState } from 'react';

import './AddForm.css';
import { Btn } from '../layout/common';

export const AddForm = () => {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: '',
    description: '',
    routes: 0,
    url: '',
    position: '',
    accomodation: '',
  });

  const saveCrag = async (event: FormEvent) => {
    event.preventDefault();

    const geoRes = await fetch(
      `https://nominatim.openstreetmap.org/search?=Wolnego%204,%20Katowice&format=json&q=${encodeURIComponent(
        form.accomodation
      )}`
    );
    const geoData = await geoRes.json();
    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);

    console.log({ lat, lon });
  };

  const updateForm = (key: string, value: any) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  if (loading) {
    return <h2>Adding crag to our database...</h2>;
  }

  return (
    <form className="add-form" onSubmit={saveCrag}>
      <h1>Add new crag</h1>
      <p>
        <label>
          Name: <br />
          <input
            type="text"
            name="name"
            required
            maxLength={99}
            value={form.name}
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </label>
      </p>

      <p>
        <label>
          Description: <br />
          <textarea
            name="description"
            required
            maxLength={999}
            value={form.description}
            onChange={(e) => updateForm('description', e.target.value)}
          />{' '}
        </label>
      </p>
      <p>
        <label>
          Routes count: <br />
          <input
            type="number"
            name="routes"
            required
            maxLength={99}
            value={form.routes}
            onChange={(e) => updateForm('routes', Number(e.target.value))}
          />
          <small> * Leave zero in that field, if crag has no routes</small>
        </label>
      </p>

      <p>
        <label>
          Crags URL address (if exists): <br />
          <input
            type="url"
            name="url"
            maxLength={99}
            value={form.url}
            onChange={(e) => updateForm('url', e.target.value)}
          />
        </label>
      </p>

      <p>
        <label>
          Crags position (GPS coordinates): <br />
          <input
            type="text"
            name="position"
            required
            maxLength={99}
            value={form.position}
            onChange={(e) => updateForm('position', e.target.value)}
          />
        </label>
      </p>

      <p>
        <label>
          Accomodation URL address (optional): <br />
          <input
            type="text"
            name="accomodation"
            maxLength={99}
            value={form.accomodation}
            onChange={(e) => updateForm('accomodation', e.target.value)}
          />
        </label>
      </p>

      <Btn text="Save" />
    </form>
  );
};
