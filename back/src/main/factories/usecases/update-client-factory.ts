import { DbUpdateClient } from "../../../data/usecases/db-update-client";
import { UpdateClient } from "../../../domain/usecases/update-client";
import { ClientsMongoRepository } from "../../../infra/db/mongodb/clients-mongo-repository";

export const makeDbUpdateClient = (): UpdateClient => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbUpdateClient(clientsMongoRepository)
}