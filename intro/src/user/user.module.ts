import { Module, forwardRef } from '@nestjs/common';
import { UsersController } from './user.controller';
import { UsersService } from './users.service';
import { AuthModule } from 'src/auth/auth.module';


@Module({
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
  imports: [forwardRef(() => AuthModule)],
})
export class UserModule {}
