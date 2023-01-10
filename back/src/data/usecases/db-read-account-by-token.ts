import { ReadAccountByToken } from "../../domain/usecases/read-account-by-token";
import { Decrypter } from "../protocols/cryptography/decrypter";
import { ReadAccountByIdRepository } from "../protocols/db/account/read-account-by-id-repository";

export class DbReadAccountByToken implements ReadAccountByToken {
  constructor(
    private readonly decrypter: Decrypter,
    private readonly readAccountByIdRepository: ReadAccountByIdRepository
  ) { }
  async read(accessToken: string): Promise<ReadAccountByToken.Result | null> {
    let token
    try {
      token = await this.decrypter.decrypt(accessToken)
    } catch (error) {
      return null
    }
    if (token) {
      const account = await this.readAccountByIdRepository.readById(token.id)
      if (account) {
        return token.id
      }
    }
    return null
  }

}