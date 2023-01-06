import { ReadAllClients } from "../../domain/usecases/read-all-clients";
import { noContent, ok, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";

export class ReadAllClientsController implements Controller {
  constructor(private readonly readAllClients: ReadAllClients) { }
  async handle(): Promise<HttpResponse> {
    try {
      const clients = await this.readAllClients.read()
      return clients.length ? ok(clients) : noContent()

    } catch (error) {
      return serverError()
    }
  }
}
