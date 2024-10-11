import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { CreateNodemailerDto } from './dto/create-nodemailer.dto';
import { UpdateNodemailerDto } from './dto/update-nodemailer.dto';

@Controller('nodemailer')
export class NodemailerController {
  constructor(private readonly nodemailerService: NodemailerService) {}

  @Post()
  create(@Body() createNodemailerDto: CreateNodemailerDto) {
    return this.nodemailerService.create(createNodemailerDto);
  }

  @Get()
  findAll() {
    return this.nodemailerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.nodemailerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNodemailerDto: UpdateNodemailerDto) {
    return this.nodemailerService.update(+id, updateNodemailerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.nodemailerService.remove(+id);
  }
}
