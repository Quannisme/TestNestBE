import { ClassStudentService } from './../class-student/class-student.service';
import {
  forwardRef,
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Student, StudentSchema } from './entities/student.entity';
import { CheckMidlleware } from './Middleware/check.middleware';
import { CheckAgeMiddleware } from './Middleware/check.middleware';
import { ClassStudentModule } from 'src/class-student/class-student.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Student.name, schema: StudentSchema }]),
    forwardRef(() => ClassStudentModule),
  ],
  controllers: [StudentController],
  providers: [StudentService],
  exports: [StudentService],
})
export class StudentModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CheckAgeMiddleware, CheckMidlleware)
      .forRoutes({ path: 'student/CreateStudent', method: RequestMethod.POST });
  }
}
