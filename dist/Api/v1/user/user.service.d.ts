import { Repository } from 'typeorm';
import { CreateUserDto } from './infra/request/create-user.dto';
import { UpdateUserDto } from './infra/request/update-user.dto';
import { UserResponseDto } from './infra/response/response-user.dto';
import { User } from '@Infrastructure/database/entity/user.entity';
export declare class UserService {
    private readonly repository;
    constructor(repository: Repository<User>);
    create(createUserDto: CreateUserDto): Promise<UserResponseDto>;
    findAll(): Promise<UserResponseDto[]>;
    findOne(id: string): Promise<UserResponseDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto>;
    remove(id: string): Promise<User>;
}
