import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { SkillsModule } from './skill/skills.module';
import { EducationModule } from './education/education.module';
import { ProfExperienceModule } from './prof-experience/prof-experience.module';
import { SummaryModule } from './summary/summary.module';
import { TemplateModule } from './template/template.module';
import { AdditionalSkillModule } from './additional-skill/additional-skill.module';
import { UserModule } from './user/user.module';
import { CvHeaderProfileModule } from './cv-header-profile/cv-header-profile.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/workpork-api'),
    AuthModule,
    EducationModule,
    SummaryModule,
    SkillsModule,
    ProfExperienceModule,
    TemplateModule,
    AdditionalSkillModule,
    UserModule,
    CvHeaderProfileModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
