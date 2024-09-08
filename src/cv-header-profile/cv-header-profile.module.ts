import { Module } from '@nestjs/common';
import { CvHeaderProfileService } from './cv-header-profile.service';
import { CvHeaderProfileController } from './cv-header-profile.controller';

@Module({
  controllers: [CvHeaderProfileController],
  providers: [CvHeaderProfileService],
})
export class CvHeaderProfileModule {}
