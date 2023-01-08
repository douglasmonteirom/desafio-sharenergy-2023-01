import { UpdateClient } from "../../../../domain/usecases/update-client"

export interface UpdateClientRepository {
  update(data: UpdateClientRepository.Params): Promise<UpdateClientRepository.Result>
}

export namespace UpdateClientRepository {
  export type Params = UpdateClient.Params
  export type Result = UpdateClient.Result
}