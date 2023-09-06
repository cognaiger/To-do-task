import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';
import { AuthModule } from './auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://cognaiger:NewPassword@to-do-app.enilejw.mongodb.net/?retryWrites=true&w=majority"),
    TaskModule,
    AuthModule
  ]
})
export class AppModule {}
