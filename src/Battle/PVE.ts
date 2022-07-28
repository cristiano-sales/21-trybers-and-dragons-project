import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    character: Fighter,
    private monsters: Array<SimpleFighter | Fighter>,
  ) {
    super(character);
  }

  private handleAttacks(): number | null {
    this.monsters.forEach((monster: SimpleFighter | Fighter) => {
      this.player.attack(monster);
    });

    const monstersLifePoints: boolean = this
      .monsters
      .every((monster: SimpleFighter | Fighter) => (
        monster.lifePoints <= 0
      ));

    if (monstersLifePoints) return 1;

    this.monsters.forEach((monster: SimpleFighter | Fighter) => {
      monster.attack(this.player);
    });

    if (super.fight() <= 0) return -1;

    return null;
  }

  public fight(): number {
    let battle = true;

    do {
      if (typeof this.handleAttacks() === 'number') {
        battle = false;
      }
    } while (battle);

    return super.fight();
  }
}
