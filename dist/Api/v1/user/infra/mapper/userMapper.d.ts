import { User } from 'src/Infrastructure/database/entity/user.entity';
import { UserResponseDto } from '../response/response-user.dto';
export declare class UserMapper {
    static allUserToResponse(entities: User[]): Promise<UserResponseDto[]>;
    static userEntityToUserResponse(user: User): Promise<UserResponseDto>;
}
