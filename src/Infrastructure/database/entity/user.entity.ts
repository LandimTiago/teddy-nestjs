import { Role } from '@Common/enums/role';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'name', type: 'varchar', length: 30, nullable: false })
  name: string;

  @Column({ name: 'username', type: 'varchar', length: 30, nullable: false })
  username: string;

  @Column({ name: 'email', type: 'varchar', unique: true })
  email: string;

  @Column({
    name: 'password',
    type: 'varchar',
    length: 25,
    nullable: false,
  })
  password: string;

  @Column({ name: 'cpf', type: 'varchar', nullable: false })
  cpf: string;

  @Column({ name: 'telefone', type: 'varchar', nullable: false })
  telefone: string;

  @Column({ name: 'role', enum: Role, default: Role.USER })
  role: Role;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

  constructor(user?: Partial<User>) {
    super();
    this.id = user?.id;
    this.name = user?.name;
    this.username = user?.username;
    this.password = user?.password;
    this.cpf = user?.cpf;
    this.telefone = user?.telefone;
    this.created_at = user?.created_at;
    this.updated_at = user?.updated_at;
  }
}
