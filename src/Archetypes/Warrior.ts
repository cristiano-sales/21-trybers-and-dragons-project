import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _ability: EnergyType;
  private static _warriorInstance = 0;

  constructor(name: string) {
    super(name);

    this._ability = 'stamina';
    Warrior._warriorInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._warriorInstance;
  }

  public get energyType(): EnergyType {
    return this._ability;
  }
}
