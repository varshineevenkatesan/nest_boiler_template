import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './controller/user/user.controller';
import { CommonController } from './controller/common/common.controller';
import { AuthService } from './services/auth/auth.service';
import { AuthModule } from './services/auth/auth.module';
import { UsersModule } from './services/users/users.module';
import { SharedService } from './services/shared/shared.service';

@Module({
  imports: [AuthModule, UsersModule],
  controllers: [AppController, UserController, CommonController],
  providers: [AppService, AuthService, SharedService],
})
export class AppModule {}
