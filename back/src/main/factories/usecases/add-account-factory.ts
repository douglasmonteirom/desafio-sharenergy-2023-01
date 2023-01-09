import { DbAddAccount } from "../../../data/usecases/db-add-account";
import { AccountMongoRepository } from "../../../db/mongodb/account-mongo-repository";
import { AddAccount } from "../../../domain/usecases/add-account";

export const makeDbAddAccount = (): AddAccount => {
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(accountMongoRepository)
}