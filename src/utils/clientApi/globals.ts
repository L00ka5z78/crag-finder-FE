import { global } from '../config';
import { ClientApi } from './clientApi';

export const clientApi = new ClientApi(global.api.BASE_URL);
export const geoApi = new ClientApi(global.api.NOMINATIM);
