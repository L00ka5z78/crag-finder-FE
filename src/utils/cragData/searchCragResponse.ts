import { ClientApiResponse, GetCragListResponse } from 'types';
import { clientApi } from '../clientApi';

export const searchCragResponse = async (
  search: string
): Promise<ClientApiResponse<GetCragListResponse>> => {
  try {
    const res = await clientApi.get(`/crag/search/${search}`);
    return res.json();
  } catch (error) {
    return {
      ok: false,
      error: 'Internal SErver Error',
      status: 500,
    };
  }
};
