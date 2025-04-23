export interface HttpRequest {
    method: string;
    url: string;
    headers?: Record<string,string>;
    body?: any;
  }
  
  export interface HttpResponse<T = any> {
    data: T;
    status: number;
    headers: Record<string,string>;
  }
  
class HttpRequestService {
    private readonly baseUrl = 'http://localhost:3001/'
  
    private buildUrl(path: string) {
      return `${this.baseUrl}${path}`;
    }
  
    private async request<T>(opts: HttpRequest): Promise<HttpResponse<T>> {
      const { method, url, headers, body } = opts;
      const res = await fetch(this.buildUrl(url), {
        method,
        headers: { 'Content-Type': 'application/json', ...(headers||{}) },
        body: body != null ? JSON.stringify(body) : undefined,
      });
      const text = await res.text();
      let data: any;
      try { data = text ? JSON.parse(text) : null; } catch { data = text; }
      const responseHeaders: Record<string,string> = {};
      res.headers.forEach((v,k) => (responseHeaders[k] = v));
      return {
        data,
        status: res.status,
        headers: responseHeaders,
      };
    }
  
    get<T>(url: string, headers?: Record<string,string>) {
      return this.request<T>({ method: 'GET', url, headers });
    }
    post<T>(url: string, body: any, headers?: Record<string,string>) {
      return this.request<T>({ method: 'POST', url, headers, body });
    }
    put<T>(url: string, body: any, headers?: Record<string,string>) {
      return this.request<T>({ method: 'PUT', url, headers, body });
    }
    delete<T>(url: string, headers?: Record<string,string>) {
      return this.request<T>({ method: 'DELETE', url, headers });
    }
  }
  
  export const httpRequestService = new HttpRequestService();