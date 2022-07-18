export default abstract class Race {
  readonly _name: string;
  readonly _dexterity: number;

  constructor(
    name: string,
    dexterity:number,
  ) {
    this._name = name;
    this._dexterity = dexterity;
  }

  public get name(): string {
    return this._name;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  protected abstract get maxLifePoints(): number;

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}
