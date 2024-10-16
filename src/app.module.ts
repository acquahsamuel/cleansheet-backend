import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { TemplateModule } from './template/template.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CvContentModule } from './cv-content/cv-content.module';
import { NodemailerModule } from './nodemailer/nodemailer.module';
 

@Module({
  imports: [
   
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      database: 'cleansheet_resume',
      username: 'root',
      password: '',
      autoLoadEntities: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    // TypeOrmModule.forFeature([User, CvContent]),
    AuthModule,
    TemplateModule,
    UserModule,
    CvContentModule,
    NodemailerModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


