export interface HashComparer {
  comparer(plaintext: string, comparetext: string): Promise<boolean>
}