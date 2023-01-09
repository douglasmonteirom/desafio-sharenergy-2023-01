import config from '../../../config/auth'
import { DbAuthentication } from "../../../data/usecases/db-authentication"
import { Authentication } from "../../../domain/usecases/authentication"
import { BcryptAdapter } from "../../../infra/cryptography/bcrypt-adapter"
import { JwtAdapter } from '../../../infra/cryptography/jwt-adapter'
import { AccountMongoRepository } from "../../../infra/db/mongodb/account-mongo-repository"

export const makeDbAuthentication = (): Authentication => {
  const salt = 10
  const bcryptAdapter = new BcryptAdapter(salt)
  const jwtAdapter = new JwtAdapter(config.secret)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAuthentication(accountMongoRepository, bcryptAdapter, jwtAdapter)
}