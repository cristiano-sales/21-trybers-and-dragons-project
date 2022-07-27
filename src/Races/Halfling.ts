import Race from './Race';

export default class Halfling extends Race {
  private static _HalflingInstance = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    this._maxLifePoints = 60;

    Halfling._HalflingInstance += 1;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  public static createdRacesInstances(): number {
    return Halfling._HalflingInstance;
  }
}
