import { HydratedDocument } from 'mongoose';
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
}

export const StudentSchema = SchemaFactory.createForClass(Student);
