import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ICurrentCustomer } from 'modules/common/interfaces/currentCustomer';
import { ICustomer } from 'modules/database/interfaces/customer';
import { Customer } from 'modules/database/models/customer';

import { CustomerRepository } from '../repositories/customer';

@Injectable()
export class CustomerService {

    constructor( private customerRepository: CustomerRepository ) { }

    public async save( model: ICustomer ): Promise<Customer> {

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

        return this.customerRepository.remove( customerId );

    }

    private async create( model: ICustomer ): Promise<Customer> {

        console.log('mmmdddmmmddd');

        const customer = await this.customerRepository.insert( model );
        return customer;

    }

    private async update( model: ICustomer ): Promise<Customer> {

        const customer = await this.customerRepository.findById( model.id );

        if ( !customer ) 
            throw new NotFoundException( 'not-found' );

        return this.customerRepository.update({ ...customer, ...model });

    }

}
