import { EndpointRecordType } from '../endpointTypes';

export const ENDPOINTS = EndpointRecordType()({
  LOGIN: {
    method: 'POST',
    url: '/auth/login',
    customAcceptHeader: 'application/json',
  },

  LOGOUT: {
    method: 'POST',
    url: '/auth/logout',
    customAcceptHeader: 'application/json',
  },
});
