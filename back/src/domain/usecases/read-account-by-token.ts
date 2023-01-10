export interface ReadAccountByToken {
  read(accessToken: string): Promise<ReadAccountByToken.Result | null>
}

export namespace ReadAccountByToken {
  export type Result = {
    id: string
  }
}