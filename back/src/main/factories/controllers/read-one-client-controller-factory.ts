import { ReadOneClientController } from "../../../presentation/controllers/read-one-client-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbReadOneClient } from "../usecases/read-one-client-factory";

export const makeReadOneClientController = (): Controller => {
  return new ReadOneClientController(makeDbReadOneClient())
}