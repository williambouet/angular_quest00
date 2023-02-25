import { Injectable } from '@angular/core';
import { TEST_LIST } from './mock-pokemon';

@Injectable({
  providedIn: 'root',
})
export class LevenshteinService {
  private substitution?: number;
  private insertion?: number;
  private deletion?: number;
  private dp?: number[][];

  constructor() {}

  getList(): any[] {
    return TEST_LIST;
  }

  // calculate(x: string, y: string): number {
  //   if (!x) {
  //     return y.length;
  //   }

  //   if (!y) {
  //     return x.length;
  //   }

  //   this.substitution =
  //     this.calculate(x.substring(1), y.substring(1)) +
  //     this.costOfSubstitution(x.charAt(0), y.charAt(0));

  //   this.insertion = this.calculate(x, y.substring(1)) + 1;

  //   this.deletion = this.calculate(x.substring(1), y) + 1;

  //   return Math.min(this.substitution, this.insertion, this.deletion);
  // }

  calculate(x: string, y: string): number {
    //rempli un tableau à 2 dimensions avec des zéro afin de faire le comptage des écarts
    //Attention, c'est récursif et il faut tester aussi les inversions, d'où le fait que ce soit mapper avec un
    //autre array.from
    this.dp = Array.from(Array(x.length + 1).fill(0)).map(() =>
      Array.from(Array(y.length + 1).fill(0))
    );
    for (let i = 0; i <= x.length; i++) {
      for (let j = 0; j <= y.length; j++) {
        if (i === 0) {
          this.dp[i][j] = j;
        } else if (j === 0) {
          this.dp[i][j] = i;
        } else {
          // voir le code commenté plus haut qui est l'origine de ces lignes
          // en gros, on garde le meilleur score de matching, après avoir testé
          // la comparaison lettre/lettre (chien/chien), l'inversion de lettre (chien/chein), l'ajout de lettre (chien/chiien), l'oublie d'une lettre (chien/chin)
          this.dp[i][j] = Math.min(
            this.dp[i - 1][j - 1] +
              this.costOfSubstitution(x.charAt(i - 1), y.charAt(j - 1)),
            this.dp[i - 1][j] + 1,
            this.dp[i][j - 1] + 1
          );
        }
      }
    }
    console.log(this.dp[x.length][y.length]);
    return this.dp[x.length][y.length];
  }

  costOfSubstitution(a: string, b: string): number {
    return a === b ? 0 : 1;
  }
}
