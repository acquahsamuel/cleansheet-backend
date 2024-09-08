import { Injectable } from '@nestjs/common';
import { CreateAdditionalSkillDto } from './dto/create-additional-skill.dto';
import { UpdateAdditionalSkillDto } from './dto/update-additional-skill.dto';

@Injectable()
export class AdditionalSkillService {
  create(createAdditionalSkillDto: CreateAdditionalSkillDto) {
    return 'This action adds a new additionalSkill';
  }

  findAll() {
    return `This action returns all additionalSkill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} additionalSkill`;
  }

  update(id: number, updateAdditionalSkillDto: UpdateAdditionalSkillDto) {
    return `This action updates a #${id} additionalSkill`;
  }

  remove(id: number) {
    return `This action removes a #${id} additionalSkill`;
  }
}
