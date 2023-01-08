import { DbUpdateClient } from "../../../data/usecases/db-update-client";
import { ClientsMongoRepository } from "../../../db/mongodb/clients-mongo-repository";
import { UpdateClient } from "../../../domain/usecases/update-client";

export const makeDbUpdateClient = (): UpdateClient => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbUpdateClient(clientsMongoRepository)
}