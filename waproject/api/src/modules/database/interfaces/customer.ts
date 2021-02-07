export interface ICustomer {
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
