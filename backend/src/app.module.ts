import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PokemonModule } from './pokemon/pokemon.module';
import { dataSourceOptions } from 'database/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(dataSourceOptions), PokemonModule],
})
export class AppModule {}
