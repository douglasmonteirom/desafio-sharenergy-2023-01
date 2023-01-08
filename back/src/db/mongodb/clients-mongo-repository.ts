import { AddClientRepository } from "../../data/protocols/db/client/add-client-repository";
import { ReadAllClientsRepository } from "../../data/protocols/db/client/read-all-clients-repository";
import { ReadOneClientRepository } from "../../data/protocols/db/client/read-one-client-repository";
import { RemoveClientRepository } from "../../data/protocols/db/client/remove-client-repository";
import { AddClient } from "../../domain/usecases/add-client";
import { ReadOneClient } from "../../domain/usecases/read-one-client";
import { RemoveClient } from "../../domain/usecases/remove-client";
import Client from "./models/client";

export class ClientsMongoRepository implements ReadAllClientsRepository, AddClientRepository, ReadOneClientRepository, RemoveClientRepository {
  constructor() { }
  async remove(data: RemoveClient.Params): Promise<RemoveClientRepository.Result> {
    return await Client.findOneAndRemove({ _id: data.id })
  }
  async read(data: ReadOneClient.Params): Promise<ReadOneClientRepository.Result> {
    return await Client.findOne({ _id: data.id })
  }
  async add(data: AddClient.Params): Promise<void> {
    await Client.create(data)
  }
  async readAll(): Promise<ReadAllClientsRepository.Result> {
    return await Client.find()
  }

}