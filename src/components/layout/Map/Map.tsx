import React, { useEffect, useState } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { GetCragListResponse } from 'types';
import 'leaflet/dist/leaflet.css';
import { SingleCrag } from '../../SingleCrag/SingleCrag';
import { searchCragResponse } from '../../../utils';
import { MainModal, MessageModal } from '../../modals';
import { AddForm } from '../../AddForm';
import { useAddFormModal, useMessageModal, useSearch } from '../../../context';

import '../../../utils/fix-map-icon';
import './Map.css';

export const Map = () => {
  const { search } = useSearch();

  const { messageModal, closeMessageModal, openMessageModal } =
    useMessageModal();
  const { addFormModalIsOpen, closeAddFormModal } = useAddFormModal();

  const [crags, setCrags] = useState<GetCragListResponse>([]);
  const [id, setId] = useState<string>('');

  useEffect(() => {
    (async () => {
      const result = await searchCragResponse(search);

      if (result.ok && result.data) {
        setCrags(result.data);
      } else {
        openMessageModal(
          result.error ? result.error : 'Unknown error occurred...',
          true
        );
      }
    })();
    // }, [search, id, openMessageModal]); //added 15.5.23 15:10 to get rid of eslint warning
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
