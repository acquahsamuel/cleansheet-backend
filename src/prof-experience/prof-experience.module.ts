import { Module } from '@nestjs/common';
import { ProfExperienceService } from './prof-experience.service';
import { ProfExperienceController } from './prof-experience.controller';

@Module({
  controllers: [ProfExperienceController],
  providers: [ProfExperienceService],
})
export class ProfExperienceModule {}
