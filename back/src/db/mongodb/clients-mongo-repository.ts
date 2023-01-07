import { AddClientRepository } from "../../data/protocols/db/client/add-client-repository";
import { ReadAllClientsRepository } from "../../data/protocols/db/client/read-all-clients-repository";
import { AddClient } from "../../domain/usecases/add-client";
import Client from "./models/client";

export class ClientsMongoRepository implements ReadAllClientsRepository, AddClientRepository {
  constructor() { }
  async add(data: AddClient.Params): Promise<void> {
    await Client.create(data)
  }
  async readAll(): Promise<ReadAllClientsRepository.Result> {
    return Client.find()
  }

}