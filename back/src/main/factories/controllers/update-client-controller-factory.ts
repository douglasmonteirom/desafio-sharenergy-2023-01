import { UpdateClientController } from "../../../presentation/controllers/update-client-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbUpdateClient } from "../usecases/update-client-factory";

export const makeUpdateClientController = (): Controller => {
  return new UpdateClientController(makeDbUpdateClient())
}