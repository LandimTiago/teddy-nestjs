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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const userMapper_1 = require("./infra/mapper/userMapper");
const user_entity_1 = require("../../../Infrastructure/database/entity/user.entity");
let UserService = class UserService {
    constructor(repository) {
        this.repository = repository;
    }
    async create(createUserDto) {
        try {
            const user = this.repository.create(createUserDto);
            const newUser = await this.repository.save(user);
            return userMapper_1.UserMapper.userEntityToUserResponse(newUser);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error, 'Error to create user');
        }
    }
    async findAll() {
        try {
            const result = await this.repository.find();
            return userMapper_1.UserMapper.allUserToResponse(result);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error, 'Error to find users');
        }
    }
    async findOne(id) {
        try {
            const user = await this.repository.findOneBy({ id });
            if (!user)
                throw new common_1.NotFoundException(`User ${id} not found!`);
            return userMapper_1.UserMapper.userEntityToUserResponse(user);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error, 'Error to find users');
        }
    }
    async update(id, updateUserDto) {
        try {
            const user = await this.repository.preload({
                id,
                ...updateUserDto,
            });
            if (!user)
                throw new common_1.NotFoundException(`User ${id} not found!`);
            await this.repository.save(user);
            return userMapper_1.UserMapper.userEntityToUserResponse(user);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error, 'Error to update user');
        }
    }
    async remove(id) {
        try {
            const user = await this.repository.findOneBy({ id });
            if (!user)
                throw new common_1.NotFoundException(`User ${id} not found!`);
            return this.repository.remove(user);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error, 'Error to delete user');
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UserService);
//# sourceMappingURL=user.service.js.map