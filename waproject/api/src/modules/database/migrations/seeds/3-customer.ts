import * as Knex from 'knex';
import { ICustomer } from 'modules/database/interfaces/customer';

export async function seed(knex: Knex): Promise<void> {
  const customer: ICustomer = {
    firstName: 'America Soft',
    lastName: '',
    email: 'americasoft@gmail.com.br',
    federalDoc: '03961263000155', //senha@123    
    createdDate: new Date(),
    updatedDate: new Date()
  };

  const customers = await knex
    .count()
    .from('Customer')
    .where({ federalDoc: customer.federalDoc })
    .first();

  if (Number(customers.count) > 0) return;

  await knex.insert(customer).into('Customer');
}
