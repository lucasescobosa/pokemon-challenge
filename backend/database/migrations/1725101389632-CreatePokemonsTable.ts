import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreatePokemonsTable1725101389632 implements MigrationInterface {
  name = 'CreatePokemonsTable1725101389632';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "pokemon" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar NOT NULL, "attack" integer NOT NULL, "defense" integer NOT NULL, "hp" integer NOT NULL, "speed" integer NOT NULL, "type" varchar NOT NULL, "imageUrl" varchar NOT NULL)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "pokemon"`);
  }
}
