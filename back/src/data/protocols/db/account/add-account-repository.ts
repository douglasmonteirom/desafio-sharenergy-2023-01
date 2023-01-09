import { AddAccount } from "../../../../domain/usecases/add-account"

export interface AddAccountRepositpry {
  add: (data: AddAccountRepositpry.Params) => Promise<AddAccountRepositpry.Result>
}

export namespace AddAccountRepositpry {
  export type Params = AddAccount.Params
  export type Result = boolean
}