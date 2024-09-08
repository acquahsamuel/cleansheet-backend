import { Injectable } from '@nestjs/common';
import { CreateCvHeaderProfileDto } from './dto/create-cv-header-profile.dto';
import { UpdateCvHeaderProfileDto } from './dto/update-cv-header-profile.dto';

@Injectable()
export class CvHeaderProfileService {
  create(createCvHeaderProfileDto: CreateCvHeaderProfileDto) {
    return 'This action adds a new cvHeaderProfile';
  }

  findAll() {
    return `This action returns all cvHeaderProfile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cvHeaderProfile`;
  }

  update(id: number, updateCvHeaderProfileDto: UpdateCvHeaderProfileDto) {
    return `This action updates a #${id} cvHeaderProfile`;
  }

  remove(id: number) {
    return `This action removes a #${id} cvHeaderProfile`;
  }
}
