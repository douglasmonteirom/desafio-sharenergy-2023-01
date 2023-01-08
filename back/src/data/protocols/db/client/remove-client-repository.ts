import { RemoveClient } from "../../../../domain/usecases/remove-client"

export interface RemoveClientRepository {
  remove(data: RemoveClientRepository.Params): Promise<RemoveClientRepository.Result>
}

export namespace RemoveClientRepository {
  export type Params = RemoveClient.Params
  export type Result = RemoveClient.Result
}