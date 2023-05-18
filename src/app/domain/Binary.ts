export class Binary {
  constructor(private binary: string) {}

  getBinary(): string {
    return this.binary;
  }

  getBit(index: number): number {
    return +this.binary[index];
  }
}
