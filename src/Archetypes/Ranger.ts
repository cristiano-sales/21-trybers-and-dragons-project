import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  private _ability: EnergyType;
  private static _rangerInstance = 0;

  constructor(name: string) {
    super(name);

    this._ability = 'stamina';
    Ranger._rangerInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._rangerInstance;
  }

  public get energyType(): EnergyType {
    return this._ability;
  }
}
