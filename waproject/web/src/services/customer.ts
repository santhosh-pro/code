import cache from 'helpers/rxjs-operators/cache';
import ICustomer from 'interfaces/models/customer';
import ICustomerRole from 'interfaces/models/customerRole';
import { IPaginationParams, IPaginationResponse } from 'interfaces/pagination';
import { Observable } from 'rxjs';

import apiService, { ApiService } from './api';

export class CustomerService {

    constructor( private apiService: ApiService ) { }

    public list( params: IPaginationParams ): Observable<IPaginationResponse<ICustomer>> {

        return this.apiService.get( '/app/customer', params );

    }

    public current(): Observable<ICustomer> {

        return this.apiService.get( '/app/customer/current' );

    }

    public roles( refresh: boolean = false ): Observable<ICustomerRole[]> {

        return this.apiService.get( '/app/customer/roles' ).pipe( cache( 'customer-service-roles', { refresh }) );
   
    }

    public save( model: Partial<ICustomer> ): Observable<ICustomer> {

        return this.apiService.post( '/app/customer', model );

    }

    public delete( id: number ): Observable<void> {

        return this.apiService.delete( `/app/customer/${id}` );

    }

}

const customerService = new CustomerService( apiService );
export default customerService;