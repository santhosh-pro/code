import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ICurrentCustomer } from 'modules/common/interfaces/currentCustomer';
import { enRoles, ICustomer, listPublicRoles } from 'modules/database/interfaces/customer';
import { Customer } from 'modules/database/models/customer';

import { CustomerRepository } from '../repositories/customer';

@Injectable()
export class CustomerService {

    constructor( private customerRepository: CustomerRepository ) { }

    public async save( model: ICustomer ): Promise<Customer> {

        if ( !model.roles || model.roles.length === 0 ) {

            throw new BadRequestException('roles-required');

        }

        if ( model.roles.includes(enRoles.user) ) {

            throw new BadRequestException( 'not-allowed-to-change-user' );

        }

        if ( !model.roles.every( r => listPublicRoles().includes(r)) ) {

            throw new BadRequestException( 'invalid-roles' );

        }

        if ( model.id ) 
            return this.update( model );
        
        return this.create( model );

    }

    public async remove( customerId: number, currentCustomer: ICurrentCustomer ): Promise<void> {

        const customer = await this.customerRepository.findById( customerId );

        if ( !customer ) {
            throw new NotFoundException( 'not-found' );
        }

        if ( customer.id === currentCustomer.id ) {

            throw new BadRequestException( 'not-allowed-remove-current-customer' );

        }

        if ( customer.isSysAdmin() ) {

            throw new BadRequestException( 'not-allowed-remove-sysAdmin' );

        }

        return this.customerRepository.remove( customerId );

    }

    private async create( model: ICustomer ): Promise<Customer> {

        const customer = await this.customerRepository.insert( model );
        return customer;

    }

    private async update( model: ICustomer ): Promise<Customer> {

        const customer = await this.customerRepository.findById( model.id );

        if ( !customer ) 
            throw new NotFoundException( 'not-found' );

        if ( customer.isSysAdmin() ) 
            throw new BadRequestException( 'not-allowed-to-change-sysAdmin' );

        return this.customerRepository.update({ ...customer, ...model });

    }

}
