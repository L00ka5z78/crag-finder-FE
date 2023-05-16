import { ClientApiResponse } from 'types';
import { geoApi } from '../clientApi';

export const geocodeRes = async (
  accomodation: string
): Promise<ClientApiResponse<{ lat: number; lon: number }>> => {
  try {
    const response = await geoApi.get(
      `/search?format=json&q=${encodeURIComponent(accomodation)}`
    );
    const geoData = await response.json();
    const lat = parseFloat(geoData[0].lat);
    const lon = parseFloat(geoData[0].lon);

    return {
      ok: true,
      data: { lat, lon },
      status: 200,
    };
  } catch (error) {
    return {
      ok: false,
      error: 'Internal Server Error...',
      status: 500,
    };
  }
};
