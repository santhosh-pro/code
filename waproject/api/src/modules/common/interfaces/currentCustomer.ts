export interface ICurrentCustomer {
    id: number;
    email: string;
    firstName: string;
    lastName?: string;
    roles: string[];
}