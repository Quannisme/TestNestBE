import {
  IsEmail,
  IsInt,
  IsNumber,
  IsUppercase,
  Max,
  Min,
} from 'class-validator';

export class CreateStudentDto {
  @IsUppercase()
  name: string;
  @IsInt()
  @Min(5)
  @Max(30)
  age: number;
  @IsNumber()
  @Min(1)
  @Max(10)
  grade: number;
}
