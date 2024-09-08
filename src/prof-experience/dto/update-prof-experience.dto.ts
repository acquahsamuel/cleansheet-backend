import { PartialType } from '@nestjs/mapped-types';
import { CreateProfExperienceDto } from './create-prof-experience.dto';

export class UpdateProfExperienceDto extends PartialType(CreateProfExperienceDto) {}
