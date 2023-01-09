import { LoginController } from "../../../presentation/controllers/login-controller"
import { Controller } from "../../../presentation/protocols/controller"
import { makeDbAuthentication } from "../usecases/authentication-factory"
import { makeLoginValidation } from "./login-validation-factory"

export const makeLoginController = (): Controller => {
  return new LoginController(makeLoginValidation(), makeDbAuthentication())
}