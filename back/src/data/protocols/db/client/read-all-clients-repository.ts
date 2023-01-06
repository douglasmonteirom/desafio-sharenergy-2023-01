import { ClientModel } from "../../../../domain/models/client";

export interface ReadAllClientsRepository {
  readAll(): Promise<ReadAllClientsRepository.Result>
}

export namespace ReadAllClientsRepository {
  export type Result = ClientModel[]
}