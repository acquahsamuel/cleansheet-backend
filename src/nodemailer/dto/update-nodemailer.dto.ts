import { PartialType } from '@nestjs/mapped-types';
import { CreateNodemailerDto } from './create-nodemailer.dto';

export class UpdateNodemailerDto extends PartialType(CreateNodemailerDto) {}
