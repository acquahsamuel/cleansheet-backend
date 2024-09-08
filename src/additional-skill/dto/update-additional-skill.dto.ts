import { PartialType } from '@nestjs/mapped-types';
import { CreateAdditionalSkillDto } from './create-additional-skill.dto';

export class UpdateAdditionalSkillDto extends PartialType(CreateAdditionalSkillDto) {}
