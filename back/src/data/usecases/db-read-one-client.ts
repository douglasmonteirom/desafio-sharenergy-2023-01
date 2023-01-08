import { ReadOneClient } from "../../domain/usecases/read-one-client";
import { ReadOneClientRepository } from "../protocols/db/client/read-one-client-repository";

export class DbReadOneClient implements ReadOneClient {
  constructor(private readonly readOneClientRepository: ReadOneClientRepository) { }
  read(data: ReadOneClient.Params): Promise<ReadOneClient.Result> {
    return this.readOneClientRepository.read(data)
  }

}
