import Race from './Race';

export default class Halfing extends Race {
  private static _halfingInstance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;

    Halfing._halfingInstance += 1;
  }

  public get maxLifePoints(): number {
    return this.maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfing._halfingInstance;
  }
}
