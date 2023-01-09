
import { AddClientRepository } from "../../../data/protocols/db/client/add-client-repository";
import { ReadAllClientsRepository } from "../../../data/protocols/db/client/read-all-clients-repository";
import { ReadOneClientRepository } from "../../../data/protocols/db/client/read-one-client-repository";
import { RemoveClientRepository } from "../../../data/protocols/db/client/remove-client-repository";
import { UpdateClientRepository } from "../../../data/protocols/db/client/update-client-repository";
import { AddClient } from "../../../domain/usecases/add-client";
import { ReadOneClient } from "../../../domain/usecases/read-one-client";
import { RemoveClient } from "../../../domain/usecases/remove-client";
import { UpdateClient } from "../../../domain/usecases/update-client";
import Client from "./models/client";

export class ClientsMongoRepository implements ReadAllClientsRepository, AddClientRepository, ReadOneClientRepository, RemoveClientRepository, UpdateClientRepository {
  constructor() { }
  async update(data: UpdateClient.Params): Promise<UpdateClient.Result> {
    return await Client.findOneAndUpdate({ _id: data.id }, { ...data })
  }
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