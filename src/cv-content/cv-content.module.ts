import { Module } from '@nestjs/common';
import { CvContentService } from './cv-content.service';
import { CvContentController } from './cv-content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvContent } from './entities/cv-content.entity';

@Module({
  imports : [
    TypeOrmModule.forFeature([CvContent]),
  ],
  controllers: [CvContentController],
  providers: [CvContentService],
})
export class CvContentModule {}
