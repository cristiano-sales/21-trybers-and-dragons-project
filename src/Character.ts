import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;

  private _archetype: Archetype;

  private _maxLifePoints: number;

  private _lifePoints: number;

  private _strength: number;

  private _defense: number;

  private _dexterity: number;

  private _energy: Energy;

  constructor(name: string) {
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = (this._race.maxLifePoints) / 2;
    this._lifePoints = this._maxLifePoints;
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

  private setLifePoints(value: number): void {
    this._lifePoints = value;
  }

  public get strength(): number {
    return this._strength;
  }

  private setStrength(value: number): void {
    this._strength = value;
  }

  public get defense(): number {
    return this._defense;
  }

  private setDefense(value: number): void {
    this._defense = value;
  }

  public get energy(): Energy {
    const energyAttribute = {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };

    return energyAttribute;
  }

  private setEnergy(value: Energy): void {
    this._energy = value;
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

  private setDexterity(value: number): void {
    this._dexterity = value;
  }

  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private setMaxLifePoints(value: number): void {
    this._maxLifePoints = value;
  }

  public receiveDamage(attackPoints: number): number {
    const damage: number = attackPoints - this.defense;

    const lifePoints: number = this.lifePoints - damage;

    if (damage > 0 && lifePoints > 0) {
      this.setLifePoints(lifePoints);
    }

    if (lifePoints <= 0) {
      this.setLifePoints(-1);
    }

    return this.lifePoints;
  }

  public attack(enemy: Fighter): void {
    const attackPoints: number = this.strength;

    enemy.receiveDamage(attackPoints);
  }

  public special(enemy: Fighter): void {
    const attackPoints: number = this.strength * 2;

    enemy.receiveDamage(attackPoints);
  }

  public levelUp(): void {
    const maxLifePoints: number = this.lifePoints + getRandomInt(1, 10);
    const strength = this.strength + getRandomInt(1, 10);
    const dexterity = this.dexterity + getRandomInt(1, 10);
    const defense = this.defense + getRandomInt(1, 10);

    this.setMaxLifePoints(maxLifePoints);
    this.setStrength(strength);
    this.setDexterity(dexterity);
    this.setDefense(defense);
    this.setEnergy({
      ...this.energy,
      amount: 10,
    });

    if (maxLifePoints > this.race.maxLifePoints) {
      const raceMaxLifePoints = this.race.maxLifePoints;

      this.setMaxLifePoints(raceMaxLifePoints);
    }

    const lifePoints = this.maxLifePoints;

    this.setLifePoints(lifePoints);
  }
}
