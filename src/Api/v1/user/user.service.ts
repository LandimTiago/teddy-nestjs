import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserMapper } from './infra/mapper/userMapper';
import { CreateUserDto } from './infra/request/create-user.dto';
import { UpdateUserDto } from './infra/request/update-user.dto';
import { UserResponseDto } from './infra/response/response-user.dto';
import { User } from '@Infrastructure/database/entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<UserResponseDto> {
    try {
      const user = this.repository.create(createUserDto);

      const newUser: User = await this.repository.save(user);

      return UserMapper.userEntityToUserResponse(newUser);
    } catch (error) {
      throw new InternalServerErrorException(error, 'Error to create user');
    }
  }

  async findAll(): Promise<UserResponseDto[]> {
    try {
      const result = await this.repository.find();

      return UserMapper.allUserToResponse(result);
    } catch (error) {
      throw new InternalServerErrorException(error, 'Error to find users');
    }
  }

  async findOne(id: string): Promise<UserResponseDto> {
    try {
      const user = await this.repository.findOneBy({ id });

      if (!user) throw new NotFoundException(`User ${id} not found!`);

      return UserMapper.userEntityToUserResponse(user);
    } catch (error) {
      throw new InternalServerErrorException(error, 'Error to find users');
    }
  }

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<UserResponseDto> {
    try {
      const user = await this.repository.preload({
        id,
        ...updateUserDto,
      });

      if (!user) throw new NotFoundException(`User ${id} not found!`);

      await this.repository.save(user);

      return UserMapper.userEntityToUserResponse(user);
    } catch (error) {
      throw new InternalServerErrorException(error, 'Error to update user');
    }
  }

  async remove(id: string) {
    try {
      const user = await this.repository.findOneBy({ id });
      if (!user) throw new NotFoundException(`User ${id} not found!`);

      return this.repository.remove(user);
    } catch (error) {
      throw new InternalServerErrorException(error, 'Error to delete user');
    }
  }
}
