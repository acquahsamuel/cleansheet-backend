import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CvHeaderProfileService } from './cv-header-profile.service';
import { CreateCvHeaderProfileDto } from './dto/create-cv-header-profile.dto';
import { UpdateCvHeaderProfileDto } from './dto/update-cv-header-profile.dto';

@Controller('cv-header-profile')
export class CvHeaderProfileController {
  constructor(private readonly cvHeaderProfileService: CvHeaderProfileService) {}

  @Post()
  create(@Body() createCvHeaderProfileDto: CreateCvHeaderProfileDto) {
    return this.cvHeaderProfileService.create(createCvHeaderProfileDto);
  }

  @Get()
  findAll() {
    return this.cvHeaderProfileService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cvHeaderProfileService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCvHeaderProfileDto: UpdateCvHeaderProfileDto) {
    return this.cvHeaderProfileService.update(+id, updateCvHeaderProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cvHeaderProfileService.remove(+id);
  }
}
