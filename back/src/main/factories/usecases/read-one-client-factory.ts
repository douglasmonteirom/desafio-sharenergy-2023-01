import { DbReadOneClient } from "../../../data/usecases/db-read-one-client";
import { ReadOneClient } from "../../../domain/usecases/read-one-client";
import { ClientsMongoRepository } from "../../../infra/db/mongodb/clients-mongo-repository";

export const makeDbReadOneClient = (): ReadOneClient => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbReadOneClient(clientsMongoRepository)
}