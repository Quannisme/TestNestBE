import { forwardRef, Module } from '@nestjs/common';
import { ClassStudentService } from './class-student.service';
import { ClassStudentController } from './class-student.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ClassStudentSchema,
  StudentClass,
} from './entities/class-student.entity';
import { StudentModule } from 'src/student/student.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: StudentClass.name, schema: ClassStudentSchema },
    ]),
    forwardRef(() => StudentModule),
  ],
  controllers: [ClassStudentController],
  providers: [ClassStudentService],
  exports: [ClassStudentService],
})
export class ClassStudentModule {}
