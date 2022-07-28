import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(heroOne: Fighter, private heroTwo: Fighter) {
    super(heroOne);
  }

  private handleAttacks(): number | null {
    this.player.attack(this.heroTwo);
    if (this.heroTwo.lifePoints <= 0) return 1;

    this.heroTwo.attack(this.player);
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
