import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SkillsModule } from './skill/skills.module';
import { CvHeaderModule } from './cv-header/cv-header.module';
import { EducationModule } from './education/education.module';
import { ProfExperienceModule } from './prof-experience/prof-experience.module';
import { SummaryModule } from './summary/summary.module';
import { TemplateModule } from './template/template.module';
import { AdditionalSkillModule } from './additional-skill/additional-skill.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/workpork-api'),
    AuthModule,
    EducationModule,
    CvHeaderModule,
    SummaryModule,
    SkillsModule,
    ProfExperienceModule,
    TemplateModule,
    AdditionalSkillModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
