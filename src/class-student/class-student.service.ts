import { Injectable } from '@nestjs/common';
import { CreateClassStudentDto } from './dto/create-class-student.dto';
import { UpdateClassStudentDto } from './dto/update-class-student.dto';
import { StudentClass } from './entities/class-student.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ClassStudentService {
  constructor(@InjectModel(StudentClass.name) private classModel:Model<StudentClass>) {}
  async create(createClassStudentDto: StudentClass):Promise<StudentClass> { 
    const res = new this.classModel({
      name: createClassStudentDto.name
    });
    return res.save();  
  }

  async findAll():Promise<StudentClass[]> {
    const list = await this.classModel.find();
    return list;
  }

  findOne(id: number) {
    return `This action returns a #${id} classStudent`;
  }

  update(id: number, updateClassStudentDto: UpdateClassStudentDto) {
    return `This action updates a #${id} classStudent`;
  }

  remove(id: number) {
    return `This action removes a #${id} classStudent`;
  }
  }
