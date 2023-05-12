type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export class ClientApi {
  constructor(private readonly baseUrl: string) {}
}
