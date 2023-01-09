import { DbReadAllClients } from "../../../data/usecases/db-read-all-clients";
import { ReadAllClients } from "../../../domain/usecases/read-all-clients";
import { ClientsMongoRepository } from "../../../infra/db/mongodb/clients-mongo-repository";

export const makeDbReadAllClients = (): ReadAllClients => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbReadAllClients(clientsMongoRepository)
}