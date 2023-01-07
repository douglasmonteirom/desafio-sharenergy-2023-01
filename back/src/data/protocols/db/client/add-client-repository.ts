import { AddClient } from "../../../../domain/usecases/add-client";

export interface AddClientRepository {
  add(data: AddClientsRepository.Params): Promise<void>
}

export namespace AddClientsRepository {
  export type Params = AddClient.Params
}