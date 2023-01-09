import { DbAddAccount } from "../../../data/usecases/db-add-account";
import { AccountMongoRepository } from "../../../db/mongodb/account-mongo-repository";
import { AddAccount } from "../../../domain/usecases/add-account";
import { BcryptAdapter } from "../../../infra/cryptography/bcrypt.adapter";

export const makeDbAddAccount = (): AddAccount => {
  const salt = 10
  const bcryptAdapter = new BcryptAdapter(salt)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(accountMongoRepository, accountMongoRepository, bcryptAdapter)
}