export interface ICustomer {
    id?: number;
    firstName: string;
    lastName?: string;
    federalDoc?: string;
    email?: string;    
    createdDate?: Date;
    updatedDate?: Date;
}

/*
export enum enRoles {
    sysAdmin = 'sysAdmin',
    admin = 'admin',
    user = 'user'
}

export function listPublicRoles(): enRoles[] {

    return [enRoles.admin, enRoles.user];

}
*/