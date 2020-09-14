import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { AuthRequired } from 'modules/common/guards/token';
import { ICurrentCustomer } from 'modules/common/interfaces/currentCustomer';
import { enRoles, listPublicRoles } from 'modules/database/interfaces/customer';
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

        console.log( 'funcionou de metodo' );
        return this.customerRepositry.list( model );
        //return 'TESTE';

    }

    @Get('roles')
    @ApiResponse({ status: 200, type: 'string', isArray: true })
    public async roles() {

        const roles = listPublicRoles();

        const rolesDescriptions: any = {
            admin: { name: 'Administrador', description: 'Acesso total a todas as funcionalidades' },
            user: { name: 'Usuário', description: 'Accesso Limitado' }
        };

        return roles.map( role => ({ role, ...rolesDescriptions[role] }) ).filter(role => role);

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
