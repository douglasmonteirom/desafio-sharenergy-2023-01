import { Authentication } from "../../domain/usecases/authentication";
import { Encrypter } from "../protocols/cryptography/encrypter";
import { HashComparer } from "../protocols/cryptography/hash-comparer";
import { ReadAccountByEmailRepository } from "../protocols/db/account/read-account-by-email-repository";

export class DbAuthentication implements Authentication {
  constructor(
    private readonly readAccountByEmailRepository: ReadAccountByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypter: Encrypter
  ) { }
  async auth(authenticationParams: Authentication.Params): Promise<Authentication.Result | null> {
    const account = await this.readAccountByEmailRepository.readByEmail(authenticationParams.email)
    if (account.id) {
      const isValid = await this.hashComparer.comparer(authenticationParams.password, account.password)
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account.id)
        return {
          accessToken,
          name: account.name
        }
      }
    }
    return null
  }
}