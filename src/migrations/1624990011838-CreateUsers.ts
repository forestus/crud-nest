import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1624990011838 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns:[
                    {
                        name:"id",
                        type:"int",
                        isGenerated: true,
                        generationStrategy: 'increment'                        
                    },
                    {
                        name:'name',
                        type: 'varchar',
                    },
                    {
                        name:'lastname',
                        type: 'varchar',
                    },
                    {
                        name: 'age',
                        type: 'int'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users")
    }

}
