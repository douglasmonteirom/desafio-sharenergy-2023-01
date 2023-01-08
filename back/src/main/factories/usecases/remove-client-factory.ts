import { DbRemoveClient } from "../../../data/usecases/db-remove-client";
import { ClientsMongoRepository } from "../../../db/mongodb/clients-mongo-repository";
import { RemoveClient } from "../../../domain/usecases/remove-client";

export const makeDbRemoveClient = (): RemoveClient => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbRemoveClient(clientsMongoRepository)
}