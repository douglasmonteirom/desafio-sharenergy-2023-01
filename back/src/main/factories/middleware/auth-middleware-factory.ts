import { AuthMiddleware } from "../../../presentation/middlewares/auth-middleware";
import { Middleware } from "../../../presentation/protocols/middleware";
import { makeDbReadAccountByToken } from "../usecases/read-account-by-token-factory";

export const makeAuthMiddleware = (): Middleware => {
  return new AuthMiddleware(makeDbReadAccountByToken())
}