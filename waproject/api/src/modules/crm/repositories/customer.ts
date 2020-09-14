import { Injectable } from '@nestjs/common';
import { IPaginationParams } from 'modules/common/interfaces/pagination';
import { enRoles, ICustomer } from 'modules/database/interfaces/customer';
import { Customer } from 'modules/database/models/customer';
import { Page, Transaction } from 'objection';

@Injectable()
export class CustomerRepository {

    public async list( params: IPaginationParams, transaction?: Transaction ): Promise<Page<Customer>> {

        let query = Customer.query( transaction )
            .select( '*' )
            .whereNot( 'roles', 'like', enRoles.sysAdmin )
            .page( params.page, params.pageSize );

        if ( params.orderBy ) {

            if ( params.orderBy !== 'fullName' ) {
                
                query = query.orderBy( params.orderBy, params.orderDirection );

            } else {

                query = query.orderBy( 'firstName', params.orderDirection ).orderBy( 'lastName', params.orderDirection );
            
            }

        }

        if ( params.term ) {

            query = query.where( query => {
                return query
                    .where( 'firstName', 'ilike', `%${params.term}%` )
                    .orWhere( 'lastName', 'ilike', `%${params.term}%` )
                    .orWhere( 'email', 'ilike', `%${params.term}%` );
            });
        }

        return query;
    }

    public async count( transaction?: Transaction ): Promise<Number> {

        const result: any = await Customer.query( transaction )
            .count( 'id as count' )
            .first();

        return Number( result.count );

    }

    public async isEmailAvailable( email: string, skipCustomerId?: number, transaction?: Transaction ): Promise<boolean> {

        let query = Customer.query( transaction )
            .count( 'id as count' )
            .where( { email } )
            .first();

        if (skipCustomerId) {
            query = query.where( 'id', '!=', skipCustomerId );
        }

        const result: any = await query;
        return Number( result.count ) === 0;

    }

    public async findById( id: number, transaction?: Transaction ): Promise<Customer> {

        return Customer.query( transaction )
            .where( { id } )
            .first();

    }

    public async findByEmail( email: string, transaction?: Transaction ): Promise<Customer> {

        return Customer.query( transaction )
            .where( { email } )
            .first();

    }

    public async insert( model: ICustomer, transaction?: Transaction ): Promise<Customer> {

        return Customer.query( transaction ).insert( model ) ;

    }

    public async update( model: ICustomer, transaction?: Transaction ): Promise<Customer> {

        return Customer.query( transaction ).updateAndFetchById( model.id, <Customer>model );

    }

    public async remove( id: number, transaction?: Transaction ): Promise<void> {

        await Customer.query( transaction )
            .del()
            .where( { id } );

    }
}
