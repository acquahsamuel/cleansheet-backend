import { PartialType } from '@nestjs/mapped-types';
import { CreateCvHeaderProfileDto } from './create-cv-header-profile.dto';

export class UpdateCvHeaderProfileDto extends PartialType(CreateCvHeaderProfileDto) {}
