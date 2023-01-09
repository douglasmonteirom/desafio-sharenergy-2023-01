import { AddAccount } from "../../domain/usecases/add-account";
import { AddAccountRepositpry } from "../protocols/db/account/add-account-repository";

export class DbAddAccount implements AddAccount {
  constructor(private readonly addAccount: AddAccountRepositpry) { }

  async add(account: AddAccount.Params): Promise<boolean> {
    // adicionar validação de campos
    // adicionar validação de email em uso
    // encriptar senha
    return this.addAccount.add(account)
  }
}