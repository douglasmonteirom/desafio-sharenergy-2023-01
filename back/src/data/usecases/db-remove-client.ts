import { RemoveClient } from "../../domain/usecases/remove-client";
import { RemoveClientRepository } from "../protocols/db/client/remove-client-repository";

export class DbRemoveClient implements RemoveClient {
  constructor(private readonly removeClientRepository: RemoveClientRepository) { }
  async remove(data: RemoveClient.Params): Promise<RemoveClient.Result> {
    return await this.removeClientRepository.remove(data)
  }
}
