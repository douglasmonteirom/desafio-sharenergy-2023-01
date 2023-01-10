import { DbReadAccountByToken } from "../../../data/usecases/db-read-account-by-token";
import { ReadAccountByToken } from "../../../domain/usecases/read-account-by-token";
import { JwtAdapter } from "../../../infra/cryptography/jwt-adapter";
import { AccountMongoRepository } from "../../../infra/db/mongodb/account-mongo-repository";
import env from "../../config/env";

export const makeDbReadAccountByToken = (): ReadAccountByToken => {
  const jwtAdapter = new JwtAdapter(env.jwtSecret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbReadAccountByToken(jwtAdapter, accountMongoRepository)
}