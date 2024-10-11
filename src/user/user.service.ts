import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
 

@Injectable()
export class UserService {
  constructor() // @InjectModel('User') private readonly userModel: Model<User>,
  // @InjectRepository(User)

  {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return;
  }

  async findAll(): Promise<User[]> {
    return;
  }
}
