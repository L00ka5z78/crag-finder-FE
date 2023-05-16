import React, { FormEvent, useState } from 'react';
import { Btn, Input } from '../layout/common';
import { geocodeRes } from '../../utils/geoApi/geo-coding';
import { addCragResponse } from '../../utils/cragData/addCragResponse';
import { useMessageModal } from '../../context';

import './AddForm.css';

interface Props {
  setId: React.Dispatch<React.SetStateAction<string>>;
  closeForm: () => void;
}

export const AddForm = ({ setId, closeForm }: Props) => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    description: '',
    routes: 0,
    url: '',
    accomodation: '',
  });
  const { openMessageModal } = useMessageModal();

  const saveCrag = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const resultGeocoding = await geocodeRes(form.accomodation);

      if (resultGeocoding.ok && resultGeocoding.data) {
        const { lat, lon } = resultGeocoding.data;
        const result = await addCragResponse({ ...form, lat, lon });
        console.log(result);

        if (result.ok && result.data) {
          setId(result.data.id);
          openMessageModal(
            `Crag ${form.name} has been created and added to our community with ID ${result.data.id}`
          );
        } else {
          openMessageModal(
            result.error ? result.error : 'Unknown error...',
            true
          );
        }
      } else {
        console.log(
          resultGeocoding.error ? resultGeocoding.error : 'Unknown error...',
          true
        );
      }
    } finally {
      setLoading(false);
      closeForm();
    }
  };

  const updateForm = (key: string, value: string | number) => {
    setForm((form) => ({
      ...form,
      [key]: value,
    }));
  };

  if (loading) {
    return <h2>Adding crag to our database...</h2>;
  }

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
            className="input"
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
            className="input"
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
            className="input"
            name="accomodation"
            id="accomodation"
            maxLength={99}
            value={form.accomodation}
            onChange={(e) => updateForm('accomodation', e.target.value)}
          />
        </div>

        <Btn type="submit">Save</Btn>
      </form>
    </>
  );
};
