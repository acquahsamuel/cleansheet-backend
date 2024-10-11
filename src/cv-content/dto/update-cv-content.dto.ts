import { PartialType } from '@nestjs/mapped-types';
import { CreateCvContentDto } from './create-cv-content.dto';

export class UpdateCvContentDto extends PartialType(CreateCvContentDto) {}
