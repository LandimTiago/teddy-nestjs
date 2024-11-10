import { Module } from '@nestjs/common';
import { DatabaseModule } from './connections/database.module';
import { PasswordService } from './password/password.service';

@Module({
  imports: [DatabaseModule],
  providers: [PasswordService],
  exports: [PasswordService],
})
export class InfraModule {}
