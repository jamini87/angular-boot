export class DevisionResult {
  quotient: number;
  remainder: number;

  constructor(divisible: number, divisor: number) {
    this.quotient = Math.floor(divisible / divisor);
    this.remainder = divisible % divisor;
  }
}
