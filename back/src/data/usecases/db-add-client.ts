import { AddClient } from "../../domain/usecases/add-client";
import { AddClientRepository } from "../protocols/db/client/add-client-repository";

export class DbAddClient implements AddClient {
  constructor(private readonly addClientRepository: AddClientRepository) { }

  async add(data: AddClient.Params): Promise<void> {
    await this.addClientRepository.add(data)
  }

}