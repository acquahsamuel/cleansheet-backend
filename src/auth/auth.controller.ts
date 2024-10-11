import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}


  @Post('register')
  async register (@Body() body: { email : string, password: string }) {
    return this.authService.register(body.email, body.password);
  }



  @Get('login')
  login(@Body() body: { email : string, password: string }) {
     return this.authService.login(body.email, body.password);
  }



  @Get('profile') 
  async getUserProfile(@Param('id') id: number) {
    // return this.authService.getUserProfile(id);
  }



}
