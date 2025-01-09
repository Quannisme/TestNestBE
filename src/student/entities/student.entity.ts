import { StudentClass } from './../../class-student/entities/class-student.entity';
import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
  @Prop()
  name: string;
  @Prop()
  age: number;
  @Prop()
  grade: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'StudentClass' })
  studentClass: StudentClass;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
