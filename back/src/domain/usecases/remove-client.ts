
export interface RemoveClient {
  remove(data: RemoveClient.Params): Promise<void>
}

export namespace RemoveClient {
  export type Params = {
    id: string
  }
}