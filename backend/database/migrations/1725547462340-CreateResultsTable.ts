import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateResultsTable1725547462340 implements MigrationInterface {
  name = 'CreateResultsTable1725547462340';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'battle_results',
        columns: [
          {
            name: 'id',
            type: 'integer',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'pokemon1_id',
            type: 'integer',
          },
          {
            name: 'pokemon2_id',
            type: 'integer',
          },
          {
            name: 'winner_id',
            type: 'integer',
          },
          {
            name: 'battle_date',
            type: 'datetime',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
        foreignKeys: [
          {
            columnNames: ['pokemon1_id'],
            referencedTableName: 'pokemon',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['pokemon2_id'],
            referencedTableName: 'pokemon',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
          {
            columnNames: ['winner_id'],
            referencedTableName: 'pokemon',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "battle_results"`);
  }
}
