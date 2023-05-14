import React, { FormEvent, useState } from 'react';

import './AddForm.css';
import { Btn, Input } from '../layout/common';
import { geocodeRes } from '../../utils/geoApi/geo-coding';
import { addCragResponse } from '../../utils/cragData/addCragResponse';

interface Props {
  setId: React.Dispatch<React.SetStateAction<string>>;
  closeForm: () => void;
}

export const AddForm = ({ setId, closeForm }: Props) => {
  const [loading, setLoading] = useState(false);
  // const [id, setId] = useState('');
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

    try {
      const resultGeocoding = await geocodeRes(form.accomodation);

      if (resultGeocoding.ok && resultGeocoding.data) {
        const { lat, lon } = resultGeocoding.data;
        const result = await addCragResponse({ ...form, lat, lon });
      } else {
      }
    } finally {
      setLoading(false);
    }

    //   try {
    //     const { lat, lon } = await geocodeRes(form.accomodation);
    //     const res = await fetch(`http://localhost:3001/crag`, {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify({
    //         ...form,
    //         lat,
    //         lon,
    //       }),
    //     });
    //     const data = await res.json();
    //     setId(data.id);
    //   } finally {
    //     setLoading(false);
    //   }
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
  // if (id) {
  //   return (
  //     <h2>
  //       "{form.name}" created crag with ID: {id}
  //     </h2>
  //   );
  // }

  return (
    <>
      <form className="add-form" onSubmit={saveCrag}>
        <h1>Add new crag</h1>
        <div className="formBox">
          <label className="label" htmlFor="name">
            Name:
          </label>
          <Input
            className="input"
            // type="text"
            name="name"
            id="name"
            required
            maxLength={99}
            value={form.name}
            onChange={(e) => updateForm('name', e.target.value)}
          />
        </div>

        <div className="formBox">
          <label className="label" htmlFor="description">
            Description:
          </label>
          <textarea
            className="textarea"
            name="description"
            id="description"
            required
            maxLength={999}
            value={form.description}
            onChange={(e) => updateForm('description', e.target.value)}
          />{' '}
        </div>
        <div className="formBox">
          <label className="label" htmlFor="routes">
            Routes count:{' '}
          </label>
          <Input
            type="number"
            name="routes"
            id="routes"
            required
            maxLength={99}
            value={form.routes}
            onChange={(e) => updateForm('routes', Number(e.target.value))}
          />
          <small> * Leave zero in that field, if crag has no routes</small>
        </div>

        <div className="formBox">
          <label className="label" htmlFor="url">
            Crags URL address (if exists):{' '}
          </label>
          <Input
            type="url"
            name="url"
            id="url"
            maxLength={99}
            value={form.url}
            onChange={(e) => updateForm('url', e.target.value)}
          />
        </div>

        <div className="formBox">
          <label className="label" htmlFor="accomodation">
            Parking address:{' '}
          </label>
          <Input
            // type="text"
            name="accomodation"
            id="accomodation"
            maxLength={99}
            value={form.accomodation}
            onChange={(e) => updateForm('accomodation', e.target.value)}
          />
        </div>

        <Btn text="Save" />
      </form>
    </>
  );
};
