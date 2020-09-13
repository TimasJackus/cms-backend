import { MigrationInterface } from 'typeorm';
import { MongoQueryRunner } from 'typeorm/driver/mongodb/MongoQueryRunner';

export class UserMigration1599994330167 implements MigrationInterface {
  public async up(queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.insertOne('users', {
      username: 'admin',
      password: '$2b$04$6ArL.tkUkvQtQhqRrF5T1OcZoM3Afj/T5QRTmi3OVlECgI74HIesy',
    });
  }

  public async down(queryRunner: MongoQueryRunner): Promise<void> {
    await queryRunner.deleteOne('users', { username: 'admin' });
  }
}
