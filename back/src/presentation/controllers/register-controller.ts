import { AddAccount } from "../../domain/usecases/add-account";
import { EmailInUseError } from "../errors/email-in-use-error";
import { forbidden, ok, serverError } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";

export class RegisterController implements Controller {
  constructor(private readonly addAccount: AddAccount) { }
  async handle(request: RegisterController.Request): Promise<HttpResponse> {
    // instanciar validações 
    // criar autenticação
    try {
      const { name, email, password } = request
      const isValid = await this.addAccount.add({
        name,
        email,
        password
      })
      if (!isValid) {
        return forbidden(new EmailInUseError())
      }
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