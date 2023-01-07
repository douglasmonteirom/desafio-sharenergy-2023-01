import { AddClientController } from "../../../presentation/controllers/add-client-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbAddClient } from "../usecases/add-client-factory";

export const makeAddClientController = (): Controller => {
  return new AddClientController(makeDbAddClient())
}