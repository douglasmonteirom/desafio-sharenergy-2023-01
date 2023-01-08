import { ReadOneClient } from "../../domain/usecases/read-one-client";
import { notFound, ok, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";

export class ReadOneClientController implements Controller {
  constructor(private readonly readOneClient: ReadOneClient) { }
  async handle(request: ReadOneClientController.Request): Promise<HttpResponse> {
    try {
      // implementar validações no request
      const client = await this.readOneClient.read(request)
      return client ? ok(client) : notFound()

    } catch (error) {
      return serverError()
    }
  }
}

export namespace ReadOneClientController {
  export type Request = ReadOneClient.Params
}