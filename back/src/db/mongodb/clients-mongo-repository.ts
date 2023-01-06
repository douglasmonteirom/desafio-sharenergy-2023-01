import { ReadAllClientsRepository } from "../../data/protocols/db/client/read-all-clients-repository";
import Client from "./models/client";

export class ClientsMongoRepository implements ReadAllClientsRepository {
  constructor() { }
  async readAll(): Promise<ReadAllClientsRepository.Result> {
    return Client.find()
  }

}