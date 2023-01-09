import { AddAccount } from "../../domain/usecases/add-account";
import { AddAccountRepositpry } from "../protocols/db/account/add-account-repository";

export class DbAddAccount implements AddAccount {
  constructor(private readonly addAccount: AddAccountRepositpry) { }

  async add(account: AddAccount.Params): Promise<boolean> {
    return this.addAccount.add(account)
  }
}