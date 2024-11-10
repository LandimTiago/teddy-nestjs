import { Module } from '@nestjs/common';
import { UserModule } from './v1/user/user.module';
import { routesV1, V1Module } from './v1/v1.module';
import { RouterModule } from '@nestjs/core';

const routes = [
  {
    path: '/v1',
    module: V1Module,
    children: routesV1,
  },
];

@Module({
  imports: [RouterModule.register(routes), UserModule],
})
export class ApiModule {}
