import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { HttpExceptionFilter } from 'src/exception-filter/http-exception.filter';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('/CreateStudent')
  async create(
    @Body() createStudentDto: CreateStudentDto,
    @Req() request: Request,
    @Res() res: Response,
  ) {
    console.log('1', createStudentDto.name);
    const temp = await this.studentService.create(createStudentDto);
    res.status(HttpStatus.CREATED).json(temp);
  }

  @Get()
  async findAll(@Res() res: Response) {
    const list = await this.studentService.findAll();
    res.status(HttpStatus.OK).json(list);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }
}
