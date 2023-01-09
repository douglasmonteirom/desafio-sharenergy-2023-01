export interface HashComparer {
  comparer(plaintext: string, comparetext: string | undefined): Promise<boolean>
}