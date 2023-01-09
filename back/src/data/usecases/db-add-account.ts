import { AddAccount } from "../../domain/usecases/add-account";
import { AddAccountRepositpry } from "../protocols/db/account/add-account-repository";
import { CheckAccountByEmailRepository } from "../protocols/db/account/check-account-by-email-repository";

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly addAccountRepository: AddAccountRepositpry,
    private readonly checkAccountByEmail: CheckAccountByEmailRepository
  ) { }

  async add(account: AddAccount.Params): Promise<boolean> {
    // adicionar validação de campos
    let addedAccount = false
    const accountExists = await this.checkAccountByEmail.checkByEmail(account.email)
    if (!accountExists) {
      // encriptar senha
      addedAccount = await this.addAccountRepository.add(account)
    }
    return addedAccount
  }
}