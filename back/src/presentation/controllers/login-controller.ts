import { Authentication } from "../../domain/usecases/authentication";
import { badRequest, ok, serverError, unauthorized } from "../helpers/http-helper";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http-response";
import { Validation } from "../protocols/validation";

export class LoginController implements Controller {
  constructor(
    private readonly validation: Validation,
    private readonly authentication: Authentication
  ) { }
  async handle(request: LoginController.Request): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(request)
      if (error) {
        return badRequest(error)
      }
      const authenticationResult = await this.authentication.auth(request)
      if (!authenticationResult) {
        return unauthorized()
      }
      return ok(authenticationResult)
    } catch (error) {
      return serverError()
    }
  }
}

export namespace LoginController {
  export type Request = {
    email: string
    password: string
  }
}