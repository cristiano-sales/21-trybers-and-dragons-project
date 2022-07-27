import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  private _ability: EnergyType;
  private static _mageInstance = 0;

  constructor(name: string) {
    super(name);

    this._ability = 'mana';
    Mage._mageInstance += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._mageInstance;
  }

  public get energyType(): EnergyType {
    return this._ability;
  }
}
