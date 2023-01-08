import { ClientModel } from "../models/client";

export interface UpdateClient {
  update(data: UpdateClient.Params): Promise<UpdateClient.Result>
}

export namespace UpdateClient {
  export type Result = ClientModel | null
  export type Params = ClientModel
}