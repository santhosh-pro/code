import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthRequired } from 'modules/common/guards/token';
import { ICurrentCustomer } from 'modules/common/interfaces/currentCustomer';
import { enRoles } from 'modules/database/interfaces/user';
import { Customer } from 'modules/database/models/customer';

import { CustomerRepository } from '../repositories/customer';
import { CustomerService } from '../services/customer';
import { ListValidator } from '../validators/customer/list';
import { SaveValidator } from '../validators/customer/save';

@ApiTags( 'CRM: Customer' )
@Controller( '/customer' )
@AuthRequired([ enRoles.user ] )
export class CustomerController {

    constructor(
        private customerRepositry: CustomerRepository,
        private customerService: CustomerService) {}

    @Get()
    @ApiResponse({ status: 200, type: [Customer] })
    public async list( @Query() model: ListValidator ) {

        return this.customerRepositry.list( model );

    }

    @Get( ':customerId' )
    @ApiResponse({ status: 200, type: Customer })
    public async details( @Param( 'customerId', ParseIntPipe ) customerId : number ) {
        
        return this.customerRepositry.findById( customerId );

    }

    @Delete( ':customerId' )
    public async delete( @Param( ':customerId', ParseIntPipe ) customerId: number, currentCustomer : ICurrentCustomer ) {

        return this.customerService.remove( customerId, currentCustomer );

    }

    @Post()
    @ApiResponse({ status: 200, type: Customer })
    public async save( @Body() model: SaveValidator ){

        return  this.customerService.save( model );

    }


}
