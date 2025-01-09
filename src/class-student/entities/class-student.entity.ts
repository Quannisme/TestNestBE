import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ClassStudentDocument = HydratedDocument<StudentClass>;

@Schema()
export class StudentClass {
  @Prop()
  name: string;
  @Prop()
  nameTeacher: string;
}

export const ClassStudentSchema = SchemaFactory.createForClass(StudentClass);
