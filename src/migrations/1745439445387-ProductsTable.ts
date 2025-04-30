import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ProductsTable1745439445387 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'products',
                columns: [
                    {
                        name: "id",
                        type: "int",
                        isPrimary: true,
                        isGenerated: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "name",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "category",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "brand",
                        type: "varchar",
                        length: "100",
                        isNullable: false
                    },
                    {
                        name: "description",
                        type: "varchar",
                        length: "200",
                        isNullable: true
                    },
                    {
                        name: "price",
                        type: "int",
                        isNullable: false
                    },
                    {
                        name: "image",
                        type: "varchar",
                        isNullable: false
                    }
                ]                
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
