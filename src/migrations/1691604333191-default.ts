import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1691604333191 implements MigrationInterface {
    name = 'Default1691604333191'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "videos" RENAME COLUMN "titulo" TO "title"`);
        await queryRunner.query(`ALTER TABLE "rooms" ADD "description" text NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "rooms" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "videos" RENAME COLUMN "title" TO "titulo"`);
    }

}
