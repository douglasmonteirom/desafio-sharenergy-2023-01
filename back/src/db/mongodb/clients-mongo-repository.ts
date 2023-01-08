import { AddClientRepository } from "../../data/protocols/db/client/add-client-repository";
import { ReadAllClientsRepository } from "../../data/protocols/db/client/read-all-clients-repository";
import { ReadOneClientRepository } from "../../data/protocols/db/client/read-one-client-repository";
import { AddClient } from "../../domain/usecases/add-client";
import { ReadOneClient } from "../../domain/usecases/read-one-client";
import Client from "./models/client";

export class ClientsMongoRepository implements ReadAllClientsRepository, AddClientRepository, ReadOneClientRepository {
  constructor() { }
  async read(data: ReadOneClient.Params): Promise<ReadOneClientRepository.Result> {
    return await Client.findOne({ _id: data.id })
  }
  async add(data: AddClient.Params): Promise<void> {
    await Client.create(data)
  }
  async readAll(): Promise<ReadAllClientsRepository.Result> {
    return Client.find()
  }

}