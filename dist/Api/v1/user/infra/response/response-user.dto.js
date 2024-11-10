"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponseDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UserResponseDto {
    constructor(id, name, username, email, cpf, telefone, created_at, updated_at) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }
}
exports.UserResponseDto = UserResponseDto;
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: '1a2b3c4d-5e6f-7g8h-9i10-j11k12l13m14',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: 'Fulano de Tal',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: 'fulano_tal',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "username", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: 'email@email.com',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: '999.999.999-99',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "cpf", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: '44999993311',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "telefone", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: 'USER',
    }),
    __metadata("design:type", String)
], UserResponseDto.prototype, "role", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: '2024-11-10T17:36:55.996Z',
        type: Date,
    }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "created_at", void 0);
__decorate([
    (0, swagger_1.ApiResponseProperty)({
        example: '2024-11-10T17:36:55.996Z',
        type: Date,
    }),
    __metadata("design:type", Date)
], UserResponseDto.prototype, "updated_at", void 0);
//# sourceMappingURL=response-user.dto.js.map