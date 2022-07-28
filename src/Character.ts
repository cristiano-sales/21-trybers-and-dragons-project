import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;

  private _archetype: Archetype;

  readonly maxLifePoints: number;

  readonly _lifePoints: number;

  readonly _strength: number;

  readonly _defense: number;

  readonly _dexterity: number;

  readonly _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this.maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  public get lifePoints(): number {
    return this._lifePoints;
  }

  public get strength(): number {
    return this._strength;
  }

  public get defense(): number {
    return this._defense;
  }

  public get energy(): Energy {
    const energyAttribute = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };

    return energyAttribute;
  }

  public get race(): Race {
    return this._race;
  }

  public set race(value: Race) {
    this._race = value;
  }

  public get archetype(): Archetype {
    return this._archetype;
  }

  public set archetype(value: Archetype) {
    this._archetype = value;
  }

  public get dexterity(): number {
    return this._dexterity;
  }

  attack: (enemy: Fighter) => void;
  special: (enemy: Fighter) => void;
  levelUp: () => void;
  receiveDamage: (attackPoints: number) => number;
}
