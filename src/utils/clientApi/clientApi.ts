type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

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
}
