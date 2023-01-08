import { ClientModel } from "../models/client"

export interface RemoveClient {
  remove(data: RemoveClient.Params): Promise<RemoveClient.Result>
}

export namespace RemoveClient {
  export type Result = ClientModel | null
  export type Params = {
    id: string
  }
}