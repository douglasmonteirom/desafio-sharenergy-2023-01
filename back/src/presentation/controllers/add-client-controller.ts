import { AddClient } from "../../domain/usecases/add-client";
import { noContent, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";

export class AddClientController implements Controller {
  constructor(private readonly addClient: AddClient) { }
  async handle(request: AddClientController.Request): Promise<HttpResponse> {
    try {
      // implementar validações no request
      await this.addClient.add(request)
      return noContent()

    } catch (error) {
      return serverError()
    }
  }
}

export namespace AddClientController {
  export type Request = AddClient.Params
}