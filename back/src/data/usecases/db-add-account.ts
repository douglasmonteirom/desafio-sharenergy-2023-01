import { AddAccount } from "../../domain/usecases/add-account";
import { Hasher } from "../protocols/cryptography/hasher";
import { AddAccountRepositpry } from "../protocols/db/account/add-account-repository";
import { CheckAccountByEmailRepository } from "../protocols/db/account/check-account-by-email-repository";

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly addAccountRepository: AddAccountRepositpry,
    private readonly checkAccountByEmail: CheckAccountByEmailRepository,
    private readonly hasher: Hasher,

  ) { }

  async add(account: AddAccount.Params): Promise<boolean> {
    // adicionar validação de campos
    let addedAccount = false
    const accountExists = await this.checkAccountByEmail.checkByEmail(account.email)
    if (!accountExists) {
      const hashedPassword = await this.hasher.hash(account.password)
      addedAccount = await this.addAccountRepository.add({ ...account, password: hashedPassword })
    }
    return addedAccount
  }
}