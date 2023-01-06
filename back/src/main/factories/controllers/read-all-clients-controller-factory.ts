import { ReadAllClientsController } from "../../../presentation/controllers/read-all-clients-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbReadAllClients } from "../usecases/read-all-clients-factory";

export const makeReadAllClientsController = (): Controller => {
  return new ReadAllClientsController(makeDbReadAllClients())
}