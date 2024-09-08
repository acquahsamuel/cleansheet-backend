import { Injectable } from '@nestjs/common';
import { CreateProfExperienceDto } from './dto/create-prof-experience.dto';
import { UpdateProfExperienceDto } from './dto/update-prof-experience.dto';

@Injectable()
export class ProfExperienceService {
  create(createProfExperienceDto: CreateProfExperienceDto) {
    return 'This action adds a new profExperience';
  }

  findAll() {
    return `This action returns all profExperience`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profExperience`;
  }

  update(id: number, updateProfExperienceDto: UpdateProfExperienceDto) {
    return `This action updates a #${id} profExperience`;
  }

  remove(id: number) {
    return `This action removes a #${id} profExperience`;
  }
}
