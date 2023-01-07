import { DbAddClient } from "../../../data/usecases/db-add-client";
import { ClientsMongoRepository } from "../../../db/mongodb/clients-mongo-repository";
import { AddClient } from "../../../domain/usecases/add-client";

export const makeDbAddClient = (): AddClient => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbAddClient(clientsMongoRepository)
}