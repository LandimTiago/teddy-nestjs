import { Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { UserModule } from './user/user.module';

export const routesV1 = [
  {
    path: '/user',
    module: UserModule,
  },
];

@Module({
  imports: [UserModule, RouterModule.register(routesV1)],
})
export class V1Module {}
