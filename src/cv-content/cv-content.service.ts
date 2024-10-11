import { Injectable } from '@nestjs/common';
import { CreateCvContentDto } from './dto/create-cv-content.dto';
import { UpdateCvContentDto } from './dto/update-cv-content.dto';
import { CvContent } from './entities/cv-content.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CvContentService {

  constructor(
    @InjectRepository(CvContent)
    private readonly cvContentRepository: Repository<CvContent>,
  ) {}


  async createCV(createCvContentDto: CreateCvContentDto) {
    const template = await this.cvContentRepository.create(createCvContentDto);
    return this.cvContentRepository.save(template);
  }


  async findAllCV() : Promise<CvContent[]> {
    return await this.cvContentRepository.find();
  }

  async findCV(id: number) : Promise<CvContent> {
    return await this.cvContentRepository.findOneBy({ id });
  }

  async updateCV(id: number, updateCvContentDto: UpdateCvContentDto) {
    return await this.cvContentRepository.update(id, updateCvContentDto);
  }

  async deleteCV(id: number) {
     return await this.cvContentRepository.delete(id);
  }


 // Get user cv by token
  async getAllUserCV(){
    return;
  }

}
