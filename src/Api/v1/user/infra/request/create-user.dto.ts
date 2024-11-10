import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Role } from '@Infrastructure/enums/role';

export class CreateUserDto {
  @ApiProperty({ example: 'Fulano de Tal' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Fulano_Tal',
    description: 'Nome pelo qual será identificado para login',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'email@email.com',
    description: 'Email do usuário',
  })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '999.999.999-99' })
  @IsString()
  @IsNotEmpty()
  cpf: string;

  @ApiProperty({ example: '44999993311' })
  @IsString()
  @IsNotEmpty()
  telefone: string;

  @ApiProperty({ example: 'Senha@123' })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({ example: 'USER' })
  @IsEnum(Role, { message: 'Role must be either ADMIN, MANAGER, or USER' })
  role: Role;
}
