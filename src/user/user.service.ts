import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const newUser = this.userRepository.create(createUserDto);
     return await this.userRepository.save(newUser);
  }



  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }


  async updateUser(id: number, updateUserDto: Partial <User>): Promise<User> {
    await this.userRepository.update(id, updateUserDto);
    return this.findById(id);
  }


  
  async deleteUser(id: number): Promise<void> {
    const result = await this.userRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  }


 
  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where : {id} });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
