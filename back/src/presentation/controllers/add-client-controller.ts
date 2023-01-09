import { AddClient } from "../../domain/usecases/add-client";
import { badRequest, noContent, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";
import { Validation } from "../protocols/validation";

export class AddClientController implements Controller {
  constructor(
    private readonly addClient: AddClient,
    private readonly validation: Validation
  ) { }
  async handle(request: AddClientController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
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