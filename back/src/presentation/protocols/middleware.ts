import { HttpResponse } from "./http-response";

export interface Middleware<T = any> {
  handle(httRequest: T): Promise<HttpResponse>
}