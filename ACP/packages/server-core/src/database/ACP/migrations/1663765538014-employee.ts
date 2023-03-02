import { MigrationInterface, QueryRunner } from "typeorm";

export class employee1663765538014 implements MigrationInterface {
    name = 'employee1663765538014'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee"."employee" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "empName" character varying NOT NULL, "description" text, "empId" integer, CONSTRAINT "UQ_880efbb94781b4793be767cd3c4" UNIQUE ("empName"), CONSTRAINT "PK_3c2bc72f03fd5abbbc5ac169498" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employee"."employee"`);
    }

}
