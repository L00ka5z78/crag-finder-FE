import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSearch } from '../../../context/search.context';
import { GetCragListResponse } from 'types';
import '../../../utils/fix-map-icon';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import { SingleCrag } from '../../SingleCrag/SingleCrag';
import { useAddFormModal, useMessageModal } from 'src/context';

export const Map = () => {
  const { search } = useSearch();

  const { messageModal, closeMessageModal, openMessageModal } =
    useMessageModal();
  const { addFormModalIsOpen, closeAddFormModal } = useAddFormModal();

  // const [crags, setCrags] = useState<SimpleCragEntity[]>([]);
  const [crags, setCrags] = useState<GetCragListResponse>([]);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    (async () => {
      const res = await searchCragResponse(search);
      const data = await res.json();

      setCrags(data);
    })();
  }, [search, id]);

  return (
    <div className="map">
      {/* <h1>Search for: {search}</h1> */}
      <MapContainer center={[50.6311796, 15.260342]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
        />

        {crags.map((crag) => (
          <Marker key={crag.id} position={[crag.lat, crag.lon]}>
            <Popup>
              <SingleCrag id={crag.id} />
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};
