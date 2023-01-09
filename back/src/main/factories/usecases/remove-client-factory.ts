import { DbRemoveClient } from "../../../data/usecases/db-remove-client";
import { RemoveClient } from "../../../domain/usecases/remove-client";
import { ClientsMongoRepository } from "../../../infra/db/mongodb/clients-mongo-repository";

export const makeDbRemoveClient = (): RemoveClient => {
  const clientsMongoRepository = new ClientsMongoRepository()
  return new DbRemoveClient(clientsMongoRepository)
}