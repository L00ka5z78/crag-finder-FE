import React, { useContext, useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { SearchContext } from '../../../context/search.context';
import { SimpleCragEntity } from 'types';
import '../../../utils/fix-map-icon';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import { SingleCrag } from '../../SingleCrag/SingleCrag';

export const Map = () => {
  const { search } = useContext(SearchContext);
  const [crags, setCrags] = useState<SimpleCragEntity[]>([]);

  useEffect(() => {
    (async () => {
      const res = await fetch(`http://localhost:3001/crag/search/${search}`);
      const data = await res.json();

      setCrags(data);
    })();
  }, [search]);

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
