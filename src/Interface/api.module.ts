import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './user/user.module';

const routes = [
  {
    path: '/user',
    module: UserModule,
  },
];

@Module({
  imports: [RouterModule.register(routes), UserModule],
})
export class ApiModule {}
