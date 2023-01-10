import { ReadAccountByToken } from "../../domain/usecases/read-account-by-token";
import { AccessDeniedError } from "../errors/accsess-denied-error";
import { forbidden, ok, serverError } from "../helpers/http-helper";
import { HttpResponse } from "../protocols/http-response";
import { Middleware } from "../protocols/middleware";

export class AuthMiddleware implements Middleware {
  constructor(private readonly readAccountBytoken: ReadAccountByToken) { }
  async handle(request: AuthMiddleware.Request): Promise<HttpResponse> {
    try {
      const { accessToken } = request
      if (accessToken) {
        const accountId = await this.readAccountBytoken.read(accessToken)
        if (accountId) {
          return ok({ accountId })
        }
      }
      return forbidden(new AccessDeniedError())
    } catch (error) {
      return serverError()
    }
  }

}

export namespace AuthMiddleware {
  export type Request = {
    accessToken?: string
  }
}