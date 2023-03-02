import { MigrationInterface, QueryRunner } from "typeorm";

export class customer1663771288452 implements MigrationInterface {
    name = 'customer1663771288452'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "employee"."customer" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "customerName" character varying NOT NULL, "description" text, "customerId" integer, CONSTRAINT "UQ_6a69ab7591cb28e56ebdf420940" UNIQUE ("customerName"), CONSTRAINT "PK_a7a13f4cacb744524e44dfdad32" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "employee"."customer"`);
    }

}
