import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import '../../../utils/fix-map-icon';
import './Map.css';
import 'leaflet/dist/leaflet.css';

export const Map = () => {
  return (
    <div className="map">
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
            <h2>Krkavka</h2>
            <p>One of the best crags in Czech Republic</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
