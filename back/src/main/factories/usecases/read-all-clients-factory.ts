import { DbReadAllClients } from "../../../data/usecases/db-read-all-clients";
import { ClientsMongoRepository } from "../../../db/mongodb/clients-mongo-repository";
import { ReadAllClients } from "../../../domain/usecases/read-all-clients";

export const makeDbReadAllClients = (): ReadAllClients => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbReadAllClients(clientsMongoRepository)
}