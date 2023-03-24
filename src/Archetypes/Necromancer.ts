import Archetype from './Archetype';
import Energy, { EnergyType } from '../Energy';

export default class Necromancer extends Archetype implements Energy {
  private _type: EnergyType;
  private _amount: number;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'mana';
    this._amount = 0;
    Necromancer._archetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  get amount(): number {
    return this._amount;
  }

  get type_(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._archetypeInstances;
  }
}