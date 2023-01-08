import { RemoveClient } from "../../domain/usecases/remove-client";
import { noContent, notFound, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";

export class RemoveClientController implements Controller {
  constructor(private readonly removeClient: RemoveClient) { }
  async handle(request: RemoveClientController.Request): Promise<HttpResponse> {
    try {
      // implementar validações no request
      const result = await this.removeClient.remove(request)
      return result ? noContent() : notFound()

    } catch (error) {
      return serverError()
    }
  }
}

export namespace RemoveClientController {
  export type Request = RemoveClient.Params
}