import React, { FormEvent, useState } from 'react';

import './AddForm.css';
import { Btn } from '../layout/common';
import { geocodeRes } from '../../utils/geoApi/geo-coding';

export const AddForm = () => {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [form, setForm] = useState({
    name: '',
    description: '',
    routes: 0,
    url: '',
    lat: 0,
    lon: 0,
    accomodation: '',
  });

  const saveCrag = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);

    // console.log({ lat, lon });
    try {
      const { lat, lon } = await geocodeRes(form.accomodation);
      const res = await fetch(`http://localhost:3001/crag`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          lat,
          lon,
        }),
      });
      const data = await res.json();
      setId(data.id);
    } finally {
      setLoading(false);
    }
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
  if (id) {
    return (
      <h2>
        "{form.name}" created crag with ID: {id}
      </h2>
    );
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
          Parking address: <br />
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
