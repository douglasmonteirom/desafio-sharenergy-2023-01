
export interface ReadAccountByEmailRepository {
  readByEmail(email: string): Promise<ReadAccountByEmailRepository.Result>
}

export namespace ReadAccountByEmailRepository {
  export type Result = {
    id: string
    name?: string
    password?: string
  }
}