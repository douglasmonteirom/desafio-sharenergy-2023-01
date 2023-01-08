import { RemoveClientController } from "../../../presentation/controllers/remove-client-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbRemoveClient } from "../usecases/remove-client-factory";

export const makeRemoveClientController = (): Controller => {
  return new RemoveClientController(makeDbRemoveClient())
}