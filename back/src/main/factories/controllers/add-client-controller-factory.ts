import { AddClientController } from "../../../presentation/controllers/add-client-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbAddClient } from "../usecases/add-client-factory";
import { makeAddClientValidation } from "./add-client-validation-factory";

export const makeAddClientController = (): Controller => {
  return new AddClientController(makeDbAddClient(), makeAddClientValidation())
}