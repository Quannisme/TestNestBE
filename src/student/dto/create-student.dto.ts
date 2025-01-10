import { StudentClass } from './../../class-student/entities/class-student.entity';
import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsUppercase,
  Max,
  Min,
} from 'class-validator';

export class CreateStudentDto {
  @IsUppercase({ message: 'Viết hoa vào' })
  name: string;
  @IsInt()
  @Min(5, { message: 'Nhỏ nhất là 5' })
  @Max(30)
  age: number;
  @IsNumber()
  @Min(1)
  @Max(10)
  grade: number;
  @IsNotEmpty({ message: 'Khong duoc trong Student class' })
  studentClass: StudentClass;
}
