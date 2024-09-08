import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonController } from './pokemon.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { BattleResults } from './entities/battleResults.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pokemon, BattleResults])],
  controllers: [PokemonController],
  providers: [PokemonService],
})
export class PokemonModule {}
