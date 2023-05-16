import { ClientApiResponse, GetOneCragResponse } from 'types';
import { clientApi } from '../clientApi';

export const getSingleCragResponse = async (
  id: string
): Promise<ClientApiResponse<GetOneCragResponse>> => {
  try {
    const response = await clientApi.get(`/crag/${id}`, {
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    return {
      ok: false,
      error: 'Internal Server Error...',
      status: 500,
    };
  }
};
