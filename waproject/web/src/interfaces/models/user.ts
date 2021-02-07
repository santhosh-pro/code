export default interface IUser {
  id?: number;
  firstName: string;
  lastName?: string;
  email: string;
  password?: string;
  roles: enRoles[];

  fullName?: string;

  createdDate?: Date;
<<<<<<< HEAD
  updatedDate?: Date;
=======
  updatedDate?: Date; 
>>>>>>> 12453a9ceac485b936e95ac960e4848602eec2be
}

export enum enRoles {
  sysAdmin = 'sysAdmin',
  admin = 'admin',
  user = 'user'
}
