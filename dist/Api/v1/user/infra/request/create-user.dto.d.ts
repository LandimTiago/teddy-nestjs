import { Role } from 'src/Common/enums/role';
export declare class CreateUserDto {
    name: string;
    username: string;
    email: string;
    cpf: string;
    telefone: string;
    password: string;
    role: Role;
}
