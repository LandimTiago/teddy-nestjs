import { Role } from '@Infrastructure/enums/role';
import {
  BaseEntity,
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';

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
    nullable: false,
    select: false,
  })
  password: string;

  @Column({ name: 'cpf', type: 'varchar', unique: true, nullable: false })
  cpf: string;

  @Column({ name: 'telefone', type: 'varchar', nullable: false })
  telefone: string;

  @Column({ name: 'role', type: 'enum', enum: Role, default: Role.USER })
  role: Role;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  created_at: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp' })
  updated_at: Date;

  constructor(user?: Partial<User>) {
    super();
    Object.assign(this, user);
  }

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(password: string): Promise<boolean> {
    return bcrypt.compare(password, this.password);
  }
}
