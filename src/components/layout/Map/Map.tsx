import React, { useContext } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { SearchContext } from '../../../context/search.context';
import '../../../utils/fix-map-icon';
import './Map.css';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  const { search } = useContext(SearchContext);

  return (
    <div className="map">
      <h1>Search for: {search}</h1>
      <MapContainer center={[50.6311796, 15.260342]} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href='https://www.openstreetmap.org/opyright'>OpenStreetMap</a> & contributors"
        />
        <Marker position={[50.6311796, 15.260342]}>
          <Popup>
            <h2>Krkavka</h2>
            <p>One of the best crags in Czech Republic</p>
          </Popup>
        </Marker>

        <Marker position={[64.48945, 10.81913]}>
          <Popup>
            <h2>Flatanger Cave</h2>
            <p>Home of the hardest routes in the world</p>
            <p>World class granite</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
