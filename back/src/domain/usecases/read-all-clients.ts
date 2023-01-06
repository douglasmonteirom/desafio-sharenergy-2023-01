import { ClientModel } from "../models/client";


export interface ReadAllClients {
  read(): Promise<ReadAllClients.Result>
}

export namespace ReadAllClients {
  export type Result = ClientModel[]
}