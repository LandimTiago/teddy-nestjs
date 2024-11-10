import { Module } from '@nestjs/common';
import { ApiModule } from './Api/api.module';
import { InfraModule } from './Infrastructure/infra.module';

@Module({
  imports: [InfraModule, ApiModule],
})
export class AppModule {}
