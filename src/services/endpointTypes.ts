export type BaseEndpoint = {
  url: string;
  customAcceptHeader?: string;
};

export type ReadEndpoint = BaseEndpoint & {
  method: 'GET';
};

export type DeleteEndpoint = BaseEndpoint & {
  method: 'DELETE';
};

export type WriteEndpoint = BaseEndpoint & {
  method: 'PUT' | 'POST';
};

export type Endpoint = ReadEndpoint | DeleteEndpoint | WriteEndpoint;

export const EndpointRecordType =
  () =>
  <T extends Record<string, Endpoint>>(endpoints: T) =>
    endpoints;

export interface ApiClientConfig {
  baseUrl?: string;
}
