import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSearch } from '../../../context/search.context';
import { GetCragListResponse } from 'types';
import 'leaflet/dist/leaflet.css';
import { SingleCrag } from '../../SingleCrag/SingleCrag';
import { searchCragResponse } from '../../../utils';
import { MainModal, MessageModal } from '../../modals';
import { AddForm } from '../../AddForm';
import { useAddFormModal, useMessageModal } from '../../../context';

import '../../../utils/fix-map-icon';
import './Map.css';

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

      if (res.ok && res.data) {
        setCrags(res.data);
      } else {
        openMessageModal(
          res.error ? res.error : 'Unknown error occurred...',
          true
        );
      }
      // const data = await res.json();
      // setCrags(data);
    })();
  }, [search, id]);

  return (
    <div className="map">
      <MainModal isOpen={addFormModalIsOpen} onRequestClose={closeAddFormModal}>
        <AddForm setId={setId} closeForm={closeAddFormModal} />
      </MainModal>

      <MessageModal
        isOpen={messageModal.isOpen}
        closeModal={closeMessageModal}
        message={messageModal.message}
        isErrorMessage={messageModal.isError}
      />

      <MapContainer
        className="leafletContainer"
        center={[50.6311796, 15.260342]}
        zoom={13}
      >
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
