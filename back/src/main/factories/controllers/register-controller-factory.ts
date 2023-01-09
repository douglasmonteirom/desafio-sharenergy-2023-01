import { RegisterController } from "../../../presentation/controllers/register-controller";
import { Controller } from "../../../presentation/protocols/controller";
import { makeDbAddAccount } from "../usecases/add-account-factory";

export const makeRegisterController = (): Controller => new RegisterController(makeDbAddAccount())
