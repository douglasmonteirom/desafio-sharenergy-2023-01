export interface ReadAccountByIdRepository {
  readById(id: string): Promise<boolean>
}
