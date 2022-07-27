import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _ability: EnergyType;
  private static _necromancerInstance = 0;

  constructor(name: string) {
    super(name);

    this._ability = 'mana';
    Necromancer._necromancerInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._necromancerInstance;
  }

  public get energyType(): EnergyType {
    return this._ability;
  }
}
