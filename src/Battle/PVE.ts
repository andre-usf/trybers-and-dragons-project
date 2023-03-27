import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

export default class PVE extends Battle {
  constructor(
    protected player: Fighter, 
    protected enviroment: SimpleFighter[],
  ) {
    super(player);
    this.player = player;
    this.enviroment = enviroment;
  }

  fight(): number {
    while (this.player.lifePoints > 0 
    && this.enviroment.some((monster) => monster.lifePoints > 0)) {
      this.enviroment = this.enviroment
        .filter((monster) => monster.lifePoints > 0);

      this.player.attack(this.enviroment[0]);

      this.enviroment = this.enviroment
        .filter((monster) => monster.lifePoints > 0);

      if (this.enviroment.some((monster) => monster.lifePoints > 0)) {
        this.enviroment.forEach((monster) => {
          monster.attack(this.player);
        });
      }
    }
    return super.fight();
  }
}
