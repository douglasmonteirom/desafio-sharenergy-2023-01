import { AddAccountRepositpry } from "../../../data/protocols/db/account/add-account-repository";
import { CheckAccountByEmailRepository } from "../../../data/protocols/db/account/check-account-by-email-repository";
import { ReadAccountByEmailRepository } from "../../../data/protocols/db/account/read-account-by-email-repository";
import { AddAccount } from "../../../domain/usecases/add-account";
import User from "./models/user";

export class AccountMongoRepository implements AddAccountRepositpry, CheckAccountByEmailRepository, ReadAccountByEmailRepository {
  async readByEmail(email: string): Promise<ReadAccountByEmailRepository.Result> {
    const account = await User.findOne({ email }).select(['password', 'name'])
    return { id: account?.id, name: account?.name, password: account?.password }
  }
  async checkByEmail(email: string): Promise<boolean> {
    const account = await User.findOne({ email });
    return account !== null
  }
  async add(data: AddAccount.Params): Promise<boolean> {
    const user = await User.create(data)
    return user._id !== null
  }
}