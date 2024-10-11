import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as process from "process";
import * as dotenv from 'dotenv';
import * as cors from 'cors';
import { AuthGuard } from './utils/guards/auth.guard';
 

dotenv.config();
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const PORT = process.env.PORT || 3000;
  app.use(
    cors({
      origin: [
        'http://localhost:4200',
        'http://localhost:3000',
      ],
    }),
  );

  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new AuthGuard());
  await app.listen(PORT, () =>{
    console.log("App is runing on port" + PORT);
  });
}
bootstrap();
