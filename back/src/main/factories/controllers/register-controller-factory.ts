import { RegisterController } from "../../../presentation/controllers/register-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbAddAccount } from "../usecases/add-account-factory";
import { makeDbAuthentication } from "../usecases/authentication-factory";
import { makeRegisterValidation } from "./register-validation-factory";

export const makeRegisterController = (): Controller => {
  return new RegisterController(makeDbAddAccount(), makeRegisterValidation(), makeDbAuthentication())
}