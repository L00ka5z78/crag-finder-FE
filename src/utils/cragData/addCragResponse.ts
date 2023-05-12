import { ClientApiResponse, GetOneCragResponse } from 'types';
import { clientApi } from '../clientApi';

export const addCragResponse = async <RequestBody>(
  body: RequestBody
): Promise<ClientApiResponse<GetOneCragResponse>> => {
  try {
    const response = await clientApi.post<RequestBody>('/crag', body, {
      credentials: 'include',
    });
    return await response.json();
  } catch (error) {
    return {
      ok: false,
      error: 'Internal server error!',
      status: 500,
    };
  }
};
