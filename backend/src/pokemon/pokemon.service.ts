import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { BattleResults } from './entities/battleResults.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>,
    @InjectRepository(BattleResults)
    private battleRepository: Repository<BattleResults>,
  ) {}

  findAll() {
    return this.pokemonRepository.find();
  }

  findOne(id: string) {
    return this.pokemonRepository.findOneBy({ id });
  }

  calculateDamage(attack: number, defense: number): number {
    const damage = attack - defense;
    return damage > 0 ? damage : 1;
  }

  async battle(pokemon1: Pokemon, pokemon2: Pokemon): Promise<Pokemon> {
    let firstAttacker: Pokemon, secondAttacker: Pokemon;

    // El pokemon con la velocidad más alta hace el primer ataque
    if (pokemon1.speed > pokemon2.speed) {
      firstAttacker = pokemon1;
      secondAttacker = pokemon2;
    } else if (pokemon2.speed > pokemon1.speed) {
      firstAttacker = pokemon2;
      secondAttacker = pokemon1;
    } else {
      // Si son iguales, el pokemon con el ataque más alto va primero
      if (pokemon1.attack > pokemon2.attack) {
        firstAttacker = pokemon1;
        secondAttacker = pokemon2;
      } else {
        firstAttacker = pokemon2;
        secondAttacker = pokemon1;
      }
    }

    let winner: Pokemon;

    // Simular la batalla en turnos
    while (pokemon1.hp > 0 && pokemon2.hp > 0) {
      // Primer ataque
      const damageToSecond = this.calculateDamage(
        firstAttacker.attack,
        secondAttacker.defense,
      );
      secondAttacker.hp -= damageToSecond;

      // Si el segundo pokemon fue derrotado
      if (secondAttacker.hp <= 0) {
        winner = firstAttacker;
        break;
      }

      // Segundo ataque
      const damageToFirst = this.calculateDamage(
        secondAttacker.attack,
        firstAttacker.defense,
      );
      firstAttacker.hp -= damageToFirst;

      // Si el primer pokemon fue derrotado
      if (firstAttacker.hp <= 0) {
        winner = secondAttacker;
        break;
      }
    }

    const battleResults = new BattleResults();
    battleResults.pokemon1 = pokemon1;
    battleResults.pokemon2 = pokemon2;
    battleResults.winner = winner;

    await this.battleRepository.save(battleResults);

    return winner;
  }
}
