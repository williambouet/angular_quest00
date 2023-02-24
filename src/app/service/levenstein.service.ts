import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LevensteinService {
  private substitution?: number;
  private insertion?: number;
  private deletion?: number;

  constructor() {}

  calculate(x: string, y: string): number {
    if (!x) {
      return y.length;
    }

    if (!y) {
      return x.length;
    }

    this.substitution =
      this.calculate(x.substring(1), y.substring(1)) +
      this.costOfSubstitution(x.charAt(0), y.charAt(0));
    this.insertion = this.calculate(x, y.substring(1)) + 1;
    this.deletion = this.calculate(x.substring(1), y) + 1;

    return Math.min(this.substitution, this.insertion, this.deletion);
  }

  costOfSubstitution(a: string, b: string): number {
    return a == b ? 0 : 1;
  }
}
