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
  @IsNotEmpty({ message: 'Không được bỏ trống tên' })
  name: string;
  @IsInt()
  @Min(5, { message: 'Nhỏ nhất là 5' })
  @Max(30)
  @IsNotEmpty({ message: 'Không được bỏ trống tuổi' })
  age: number;
  @IsNumber()
  @Min(1, { message: 'Nhỏ nhất là 1 điểm' })
  @Max(10, { message: 'Lớn nhất là 10 điểm' })
  @IsNotEmpty({ message: 'Không được bỏ trống điểm trung bình' })
  grade: number;
  @IsNotEmpty({ message: 'Khong duoc trong Student class' })
  studentClass: StudentClass;
}
