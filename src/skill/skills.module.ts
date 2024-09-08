import { Module } from '@nestjs/common';
import { SkillModule } from './skill.module';

@Module({
  imports: [SkillModule]
})
export class SkillsModule {}
