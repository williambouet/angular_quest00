export class Kitten {
  constructor(
    public name: string | null | undefined,
    public race: string | null | undefined,
    public dateOfBirth: string | null | undefined,
    public image: string | null | undefined,
    public isAdopted: boolean = false
  ) {}
}
