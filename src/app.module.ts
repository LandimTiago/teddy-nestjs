import { Module } from '@nestjs/common';
import { InfraModule } from './Infrastructure/infra.module';
import { ApiModule } from './Interface/api.module';

@Module({
  imports: [InfraModule, ApiModule],
})
export class AppModule {}
