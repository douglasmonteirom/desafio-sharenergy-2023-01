import { RemoveClient } from "../../../../domain/usecases/remove-client"

export interface RemoveClientRepository {
  remove(data: RemoveClientRepository.Params): Promise<void>
}

export namespace RemoveClientRepository {
  export type Params = RemoveClient.Params
}