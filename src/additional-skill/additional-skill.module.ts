import { Module } from '@nestjs/common';
import { AdditionalSkillService } from './additional-skill.service';
import { AdditionalSkillController } from './additional-skill.controller';

@Module({
  controllers: [AdditionalSkillController],
  providers: [AdditionalSkillService],
})
export class AdditionalSkillModule {}
