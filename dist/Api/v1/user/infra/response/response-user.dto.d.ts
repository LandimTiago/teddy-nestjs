import type { Role } from 'src/Common/enums/role';
export declare class UserResponseDto {
    id: string;
    name: string;
    username: string;
    email: string;
    cpf: string;
    telefone: string;
    role: Role;
    created_at: Date;
    updated_at: Date;
    constructor(id: string, name: string, username: string, email: string, cpf: string, telefone: string, created_at: Date, updated_at: Date);
}
