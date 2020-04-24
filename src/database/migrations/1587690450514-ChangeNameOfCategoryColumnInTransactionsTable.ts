import { MigrationInterface, QueryRunner } from 'typeorm';

export default class ChangeNameOfCategoryColumnInTransactionsTable1587690450514
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('transactions', 'category', 'category_id');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('transactions', 'category_id', 'category');
  }
}
