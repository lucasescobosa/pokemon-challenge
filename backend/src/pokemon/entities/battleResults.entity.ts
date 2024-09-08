import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Pokemon } from './pokemon.entity';

@Entity()
export class BattleResults {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'pokemon1_id' })
  pokemon1: Pokemon;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'pokemon2_id' })
  pokemon2: Pokemon;

  @ManyToOne(() => Pokemon)
  @JoinColumn({ name: 'winner_id' })
  winner: Pokemon;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  battle_date: Date;
}
