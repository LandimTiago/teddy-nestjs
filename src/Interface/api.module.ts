import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

const routes = [
  {
    path: '/user',
    module: UserModule,
  },
  {
    path: '/login',
    module: AuthModule,
  },
];

@Module({
  imports: [RouterModule.register(routes), UserModule, AuthModule],
})
export class ApiModule {}
