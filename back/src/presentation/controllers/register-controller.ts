import { AddAccount } from "../../domain/usecases/add-account";
import { EmailInUseError } from "../errors/email-in-use-error";
import { badRequest, forbidden, ok, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";
import { Validation } from "../protocols/validation";

export class RegisterController implements Controller {
  constructor(
    private readonly addAccount: AddAccount,
    private readonly validation: Validation
  ) { }
  async handle(request: RegisterController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const { name, email, password } = request
      const isValid = await this.addAccount.add({
        name,
        email,
        password
      })
      if (!isValid) {
        return forbidden(new EmailInUseError())
      }
      // criar autenticação
      return ok({ name, email }) // alterar para retornar token
    } catch (error) {
      return serverError()
    }
  }
}

export namespace RegisterController {
  export type Request = {
    name: string
    email: string
    password: string
    passwordConfim: string
  }
}