import { ClientModel } from "../../../../domain/models/client";
import { ReadOneClient } from "../../../../domain/usecases/read-one-client";

export interface ReadOneClientRepository {
  read(data: ReadOneClientRepository.Params): Promise<ReadOneClientRepository.Result>
}

export namespace ReadOneClientRepository {
  export type Result = ClientModel
  export type Params = ReadOneClient.Params
}