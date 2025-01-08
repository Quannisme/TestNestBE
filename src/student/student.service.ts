import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { Model } from 'mongoose';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const res = new this.studentModel({
      name: createStudentDto.name,
      age: createStudentDto.age,
      grade: createStudentDto.grade,
    });

    return res.save();
  }

  async findAll(): Promise<Student[]> {
    const list = await this.studentModel.find();
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} student`;
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    return `This action updates a #${id} student`;
  }

  remove(id: number) {
    return `This action removes a #${id} student`;
  }
}
