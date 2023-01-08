import { UpdateClient } from "../../domain/usecases/update-client";
import { noContent, notFound, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";

export class UpdateClientController implements Controller {
  constructor(private readonly updateClient: UpdateClient) { }
  async handle(request: UpdateClientController.Request): Promise<HttpResponse> {
    try {
      // implementar validações no request
      const result = await this.updateClient.update(request)
      return result ? noContent() : notFound()

    } catch (error) {
      return serverError()
    }
  }
}

export namespace UpdateClientController {
  export type Request = UpdateClient.Params
}