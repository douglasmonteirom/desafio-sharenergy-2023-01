import { UpdateClient } from "../../domain/usecases/update-client";
import { UpdateClientRepository } from "../protocols/db/client/update-client-repository";


export class DbUpdateClient implements UpdateClient {
  constructor(private readonly updateClientRepository: UpdateClientRepository) { }
  async update(data: UpdateClient.Params): Promise<UpdateClient.Result> {
    return await this.updateClientRepository.update(data)
  }
}
