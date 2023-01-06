import { ReadAllClients } from "../../domain/usecases/read-all-clients";
import { ReadAllClientsRepository } from "../protocols/db/client/read-all-clients-repository";

export class DbReadAllClients implements ReadAllClients {
  constructor(private readonly readAllClientsRepository: ReadAllClientsRepository) { }

  read(): Promise<ReadAllClients.Result> {
    return this.readAllClientsRepository.readAll()
  }
}
