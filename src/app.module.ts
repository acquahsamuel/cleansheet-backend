import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SkillsModule } from './skill/skills.module';
import { CvHeaderModule } from './cv-header/cv-header.module';
import { SummaryModule } from './summary/summary.module';
import { AdditionalDetailModule } from './additional-detail/additional-detail.module';
import { EducationModule } from './education/education.module';
import { ProfExperienceModule } from './prof-experience/prof-experience.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/workpork-api'),
    AuthModule,
    SkillsModule,
    EducationModule,
    CvHeaderModule,
    SummaryModule,
    AdditionalDetailModule,
    ProfExperienceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
