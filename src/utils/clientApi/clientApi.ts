type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export class ClientApi {
  constructor(private readonly baseUrl: string) {}

  private getUrl(endpoint: string): string {
    return this.baseUrl + endpoint;
  }

  private async request<RequestBodyT>(
    endpoint: string,
    method: HttpMethod,
    options: RequestInit = {},
    body?: RequestBodyT
  ): Promise<Response> {
    const fetchOptions: RequestInit = {
      method,
      ...options,
    };
    if (body) {
      fetchOptions.headers = {
        'Content-Type': 'application/json',
        ...options.headers,
      };
      fetchOptions.body = JSON.stringify(body);
    }
    return await fetch(this.getUrl(endpoint), fetchOptions);
  }

  async post<RequestBody>(
    endpoint: string,
    body: RequestBody,
    options?: RequestInit
  ): Promise<Response> {
    return this.request(endpoint, 'POST', options, body);
  }

  async get(endpoint: string, options?: RequestInit): Promise<Response> {
    return this.request(endpoint, 'GET', options);
  }

  async put<RequestBody>(
    endpoint: string,
    body: RequestBody,
    options?: RequestInit
  ): Promise<Response> {
    return this.request(endpoint, 'PUT', options, body);
  }

  async patch<RequestBody>(
    endpoint: string,
    body: RequestBody,
    options?: RequestInit
  ): Promise<Response> {
    return this.request(endpoint, 'PATCH', options, body);
  }

  async delete(endpoint: string, options?: RequestInit): Promise<Response> {
    return this.request(endpoint, 'DELETE', options);
  }
}
