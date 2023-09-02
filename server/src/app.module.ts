import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskModule } from './task/task.module';


@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://cognaiger:NewPassword@to-do-app.enilejw.mongodb.net/?retryWrites=true&w=majority"),
    TaskModule
  ]
})
export class AppModule {}
