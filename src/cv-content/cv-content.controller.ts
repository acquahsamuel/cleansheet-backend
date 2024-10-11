import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CvContentService } from './cv-content.service';
import { CreateCvContentDto } from './dto/create-cv-content.dto';
import { UpdateCvContentDto } from './dto/update-cv-content.dto';

@Controller('api/v1/cv-content')
export class CvContentController {
  constructor(private readonly cvContentService: CvContentService) {}

  @Post()
  create(@Body() createCvContentDto: CreateCvContentDto) {
    return this.cvContentService.create(createCvContentDto);
  }

  @Get()
  findAll() {
    return this.cvContentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvContentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCvContentDto: UpdateCvContentDto) {
    return this.cvContentService.update(+id, updateCvContentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvContentService.remove(+id);
  }
}
