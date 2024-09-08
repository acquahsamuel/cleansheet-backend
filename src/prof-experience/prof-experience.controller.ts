import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfExperienceService } from './prof-experience.service';
import { CreateProfExperienceDto } from './dto/create-prof-experience.dto';
import { UpdateProfExperienceDto } from './dto/update-prof-experience.dto';

@Controller('prof-experience')
export class ProfExperienceController {
  constructor(private readonly profExperienceService: ProfExperienceService) {}

  @Post()
  create(@Body() createProfExperienceDto: CreateProfExperienceDto) {
    return this.profExperienceService.create(createProfExperienceDto);
  }

  @Get()
  findAll() {
    return this.profExperienceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profExperienceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfExperienceDto: UpdateProfExperienceDto) {
    return this.profExperienceService.update(+id, updateProfExperienceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profExperienceService.remove(+id);
  }
}
