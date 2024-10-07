import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from "./entities/user.entity";
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import {InjectModel} from "@nestjs/mongoose";
// import {Model} from "mongoose";



@Injectable()
export class UserService {


  constructor(
    // @InjectModel('User') private readonly userModel: Model<User>,
    @InjectRepository(User)
    private readonly userRepository : Repository <User>
  ) {}


 

  async createUser(
    createUserDto: CreateUserDto,
  ): Promise<User> {
    const userData =
      await this.userRepository.create(
        createUserDto,
      );
    return this.userRepository.save(userData);
  }


  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  // async getUserById(id: string): Promise<User> {
  //   const user = await this.userRepository.findById(id).exec();
  //   if (!user) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return user;
  // }



  // async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
  //   const user = await this.userModel.findByIdAndUpdate(id, updateUserDto, {
  //     new: true,
  //     runValidators: true,
  //   }).exec();
  //   if (!user) {
  //     throw new NotFoundException(`User with ID ${id} not found`);
  //   }
  //   return user;
  // }


}
