import { UserService } from './user.service';
import { CreateUserDto } from './infra/request/create-user.dto';
import { UpdateUserDto } from './infra/request/update-user.dto';
import { UserResponseDto } from './infra/response/response-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<UserResponseDto>;
    findAll(): Promise<UserResponseDto[]>;
    findOne(id: string): Promise<UserResponseDto>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<UserResponseDto>;
    remove(id: string): Promise<import("../../../Infrastructure/database/entity/user.entity").User>;
}
