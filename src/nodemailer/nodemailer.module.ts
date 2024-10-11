import { Module } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import { NodemailerController } from './nodemailer.controller';

@Module({
  controllers: [NodemailerController],
  providers: [NodemailerService],
})
export class NodemailerModule {}
