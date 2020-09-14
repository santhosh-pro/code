import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  await knex.schema.createTable('Customer', table => {
    table.increments('id').primary();
    table.string('firstName', 50).notNullable();
    table.string('lastName', 50).nullable();
    table
      .string('email', 150)
      .notNullable()
      .unique();
    table
      .string('federalDoc', 14)
      .notNullable()
      .unique();
    table.string('roles', 1000).notNullable();
    table.dateTime('createdDate').notNullable();
    table.dateTime('updatedDate').notNullable();
  });
}

export async function down(knex: Knex): Promise<any> {
  await knex.schema.dropTable('Customer');
}
