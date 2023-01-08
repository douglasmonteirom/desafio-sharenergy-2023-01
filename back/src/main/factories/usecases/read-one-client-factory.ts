import { DbReadOneClient } from "../../../data/usecases/db-read-one-client";
import { ClientsMongoRepository } from "../../../db/mongodb/clients-mongo-repository";
import { ReadOneClient } from "../../../domain/usecases/read-one-client";

export const makeDbReadOneClient = (): ReadOneClient => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbReadOneClient(clientsMongoRepository)
}