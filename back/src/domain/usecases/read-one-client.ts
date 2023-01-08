import { ClientModel } from "../models/client";


export interface ReadOneClient {
  read(data: ReadOneClient.Params): Promise<ReadOneClient.Result>
}

export namespace ReadOneClient {
  export type Result = ClientModel | null
  export type Params = {
    id: string
  }
}