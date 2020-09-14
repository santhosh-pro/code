import { enRoles } from './customer';

export default interface ICustomerRole {
  role: enRoles;
  name: string;
  description?: string;
}
