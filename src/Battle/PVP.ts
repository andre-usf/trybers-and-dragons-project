import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  constructor(protected player: Fighter, protected player2: Fighter) {
    super(player);
    this.player = player;
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this.player2.lifePoints > 0) {
      this.player.attack(this.player2);
      if (this.player2.lifePoints > 0) {
        this.player2.attack(this.player);
      }
    }
    return super.fight();
  }
}
