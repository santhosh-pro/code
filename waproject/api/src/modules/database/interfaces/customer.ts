export interface ICustomer {
<<<<<<< HEAD
  id?: number;
  firstName: string;
  lastName?: string;
  federalDoc?: string;
  email: string;
  roles?: enRoles[];

  createdDate?: Date;
  updatedDate?: Date;
}

export enum enRoles {
  sysAdmin = 'sysAdmin',
  admin = 'admin',
  customer = 'customer'
}

export function listPublicRoles(): enRoles[] {
  return [enRoles.admin, enRoles.customer];
}
=======
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
>>>>>>> 12453a9ceac485b936e95ac960e4848602eec2be
