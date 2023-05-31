import axios, { AxiosInstance, AxiosResponse } from 'axios';
import {
  ApiClientConfig,
  DeleteEndpoint,
  ReadEndpoint,
  WriteEndpoint,
} from './endpointTypes';
import { CLIENT_API_CONFIG } from './client-api-config';

class ClientApi {
  private readonly instance: AxiosInstance;

  constructor(configuration: ApiClientConfig) {
    const { baseUrl: baseURL } = configuration;

    this.instance = axios.create({
      baseURL,
      withCredentials: true,
      headers: {
        Accept: 'application/json',
      },
    });
  }

  post = <RequestT, ResponseT>(
    endpointConfig: WriteEndpoint,
    data: RequestT,
    params?: RequestT
  ): Promise<AxiosResponse<ResponseT>> => {
    const { url, method } = endpointConfig;

    return this.instance.post(url, data, {
      params,
    });
  };

  get = <RequestT, ResponseT>(
    endpointConfig: ReadEndpoint,
    params?: RequestT
    // responseType?: ResponseType // not needed probably
  ): Promise<AxiosResponse<ResponseT>> => {
    const { url } = endpointConfig;

    return this.instance.get(url, {
      params,
    });
  };

  put = <RequestT, ResponseT>(
    endpointConfig: WriteEndpoint,
    data?: RequestT,
    params?: RequestT
    // responseType?: ResponseType
  ): Promise<AxiosResponse<ResponseT>> => {
    const { url, method } = endpointConfig;
    // if (method === 'POST') throw Error('Invalid HTTP method passed as argument');

    return this.instance.put(url, data, {
      params,
    });
  };

  delete = <RequestT, ResponseT>(
    endpointConfig: DeleteEndpoint,
    params?: RequestT
    // responseType?: ResponseType
  ): Promise<AxiosResponse<ResponseT>> => {
    const { url } = endpointConfig;

    return this.instance.delete(url, {
      params,
    });
  };
}
export const clientApi = new ClientApi(CLIENT_API_CONFIG);
