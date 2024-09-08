import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }
 


  getUserProfile(){}




  getProfileByUsername(){}



  findUserByEmail(){}



  findUserByUserId(){}



  updateUserRole(){}




  updatePermissions(){}





  
 

}
