import { Role } from '@Common/enums/role';
import { BaseEntity } from 'typeorm';
export declare class User extends BaseEntity {
    id: string;
    name: string;
    username: string;
    email: string;
    password: string;
    cpf: string;
    telefone: string;
    role: Role;
    created_at: Date;
    updated_at: Date;
    constructor(user?: Partial<User>);
}
