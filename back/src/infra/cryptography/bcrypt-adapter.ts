import bcrypt from 'bcryptjs';
import { HashComparer } from '../../data/protocols/cryptography/hash-comparer';
import { Hasher } from '../../data/protocols/cryptography/hasher';

export class BcryptAdapter implements Hasher, HashComparer {
  constructor(private readonly salt: number) { }
  async comparer(plaintext: string, comparetext: string): Promise<boolean> {
    return bcrypt.compare(plaintext, comparetext)
  }

  async hash(plaintext: string): Promise<string> {
    return bcrypt.hash(plaintext, this.salt)
  }

}
