import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;

  readonly _strength: number;

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
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

  private handleLifePoints(damageTaken: number, lifePoints:number): void {
    if (damageTaken > 0 && lifePoints > 0) {
      this.setLifePoints(lifePoints);
    }

    if (lifePoints <= 0) {
      this.setLifePoints(-1);
    }
  }

  public receiveDamage(damageTaken: number): number {
    const lifePoints: number = this.lifePoints - damageTaken;

    this.handleLifePoints(damageTaken, lifePoints);

    return this.lifePoints;
  }

  public attack(enemy: SimpleFighter): void {
    const attackPoints: number = this.strength;

    enemy.receiveDamage(attackPoints);
  }
}
