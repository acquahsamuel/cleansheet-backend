import { PartialType } from '@nestjs/mapped-types';
import { CreateSummaryDto } from './create-summary.dto';

export class UpdateSummaryDto extends PartialType(CreateSummaryDto) {}
