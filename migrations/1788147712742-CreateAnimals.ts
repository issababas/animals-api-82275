import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateAnimals1788147712742 implements MigrationInterface {
    name = 'CreateAnimals1788147712742'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "animals" ("id" SERIAL NOT NULL, "nombre" character varying NOT NULL, "especie" character varying NOT NULL, "raza" character varying NOT NULL, "edad" integer NOT NULL, "peso" numeric(10,2) NOT NULL, CONSTRAINT "PK_6154c334bbb19186788468bce5c" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "animals"`);
    }

}
