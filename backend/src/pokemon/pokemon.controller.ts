import { Controller, Get, Post, Body, NotFoundException } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './entities/pokemon.entity';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  findAll() {
    return this.pokemonService.findAll();
  }

  @Post('battle')
  async battle(
    @Body('pokemon1Id') pokemon1Id: string,
    @Body('pokemon2Id') pokemon2Id: string,
  ): Promise<any> {
    const pokemon1: Pokemon = await this.pokemonService.findOne(pokemon1Id);
    const pokemon2: Pokemon = await this.pokemonService.findOne(pokemon2Id);

    if (!pokemon1 || !pokemon2) {
      throw new NotFoundException('Pokemon not found');
    }

    const clonedPokemon1 = { ...pokemon1 };
    const clonedPokemon2 = { ...pokemon2 };

    const winner = await this.pokemonService.battle(
      clonedPokemon1,
      clonedPokemon2,
    );

    return {
      winner: winner.name,
    };
  }
}
