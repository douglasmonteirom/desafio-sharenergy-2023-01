import jwt, { JwtPayload } from 'jsonwebtoken'
import { Decrypter } from '../../data/protocols/cryptography/decrypter'
import { Encrypter } from '../../data/protocols/cryptography/encrypter'

export class JwtAdapter implements Encrypter, Decrypter {
  constructor(private readonly secret: string) { }

  async encrypt(plaintext: string): Promise<string> {
    return jwt.sign({ id: plaintext }, this.secret)
  }
  async decrypt(ciphertext: string): Promise<any | JwtPayload> {
    return jwt.verify(ciphertext, this.secret)
  }

}