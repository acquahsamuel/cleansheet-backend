import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdditionalSkillService } from './additional-skill.service';
import { CreateAdditionalSkillDto } from './dto/create-additional-skill.dto';
import { UpdateAdditionalSkillDto } from './dto/update-additional-skill.dto';

@Controller('additional-skill')
export class AdditionalSkillController {
  constructor(private readonly additionalSkillService: AdditionalSkillService) {}

  @Post()
  create(@Body() createAdditionalSkillDto: CreateAdditionalSkillDto) {
    return this.additionalSkillService.create(createAdditionalSkillDto);
  }

  @Get()
  findAll() {
    return this.additionalSkillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.additionalSkillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdditionalSkillDto: UpdateAdditionalSkillDto) {
    return this.additionalSkillService.update(+id, updateAdditionalSkillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.additionalSkillService.remove(+id);
  }
}
