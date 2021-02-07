export default interface ICustomer {

    id?: number;
    firstName: string;
    lastName?: string;
    email: string;
    federalDoc: string;
    roles: enRoles[];

    fullName?: string;

    createdDate?: Date;
    updatedDate?: Date;

}

export enum enRoles {

    sysAdmin = 'sysAdmin',
    admin = 'admin',
    user = 'user'
    
}
