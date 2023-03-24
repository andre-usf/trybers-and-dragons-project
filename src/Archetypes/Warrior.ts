import Archetype from './Archetype';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _type: EnergyType;
  private static _archetypeInstances = 0;

  constructor(name: string) {
    super(name);
    this._type = 'stamina';
    Warrior._archetypeInstances += 1;
  }

  get energyType(): EnergyType {
    return this.type_;
  }

  get type_(): EnergyType {
    return this._type;
  }

  static createdArchetypeInstances(): number {
    return Warrior._archetypeInstances;
  }
}