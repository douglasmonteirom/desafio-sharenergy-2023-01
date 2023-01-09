import { DbAddClient } from "../../../data/usecases/db-add-client";
import { AddClient } from "../../../domain/usecases/add-client";
import { ClientsMongoRepository } from "../../../infra/db/mongodb/clients-mongo-repository";

export const makeDbAddClient = (): AddClient => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbAddClient(clientsMongoRepository)
}