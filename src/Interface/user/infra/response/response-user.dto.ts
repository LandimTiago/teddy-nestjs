import { ApiResponse, ApiResponseProperty } from '@nestjs/swagger';
import type { Role } from '@Infrastructure/enums/role';

export class UserResponseDto {
  @ApiResponseProperty({
    example: '1a2b3c4d-5e6f-7g8h-9i10-j11k12l13m14',
  })
  id: string;

  @ApiResponseProperty({
    example: 'Fulano de Tal',
  })
  name: string;

  @ApiResponseProperty({
    example: 'fulano_tal',
  })
  username: string;

  @ApiResponseProperty({
    example: 'email@email.com',
  })
  email: string;

  @ApiResponseProperty({
    example: '999.999.999-99',
  })
  cpf: string;

  @ApiResponseProperty({
    example: '44999993311',
  })
  telefone: string;

  @ApiResponseProperty({
    example: 'USER',
  })
  role: Role;

  @ApiResponseProperty({
    example: '2024-11-10T17:36:55.996Z',
    type: Date,
  })
  created_at: Date;

  @ApiResponseProperty({
    example: '2024-11-10T17:36:55.996Z',
    type: Date,
  })
  updated_at: Date;

  constructor(
    id: string,
    name: string,
    username: string,
    email: string,
    cpf: string,
    telefone: string,
    created_at: Date,
    updated_at: Date,
  ) {
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
