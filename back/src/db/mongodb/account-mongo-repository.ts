import { AddAccountRepositpry } from "../../data/protocols/db/account/add-account-repository";
import { AddAccount } from "../../domain/usecases/add-account";
import User from "./models/user";

export class AccountMongoRepository implements AddAccountRepositpry {
  async add(data: AddAccount.Params): Promise<boolean> {
    const user = await User.create(data)
    return user._id !== null
  }
}