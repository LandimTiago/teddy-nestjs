"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const response_user_dto_1 = require("../response/response-user.dto");
class UserMapper {
    static async allUserToResponse(entities) {
        return entities.map((user) => {
            return new response_user_dto_1.UserResponseDto(user.id, user.name, user.username, user.email, user.cpf, user.telefone, user.created_at, user.updated_at);
        });
    }
    static async userEntityToUserResponse(user) {
        return new response_user_dto_1.UserResponseDto(user.id, user.name, user.username, user.email, user.cpf, user.telefone, user.created_at, user.updated_at);
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=userMapper.js.map