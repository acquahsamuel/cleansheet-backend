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


  async create(createCvContentDto: CreateCvContentDto) {
    const template = await this.cvContentRepository.create(createCvContentDto);
    return this.cvContentRepository.save(template);
  }


  async findAll() : Promise<CvContent[]> {
    return  await this.cvContentRepository.find();
  }

  async findOne(id: number) : Promise<CvContent> {
    return await this.cvContentRepository.findOneBy({ id });
  }

  async update(id: number, updateCvContentDto: UpdateCvContentDto) {
    return await this.cvContentRepository.update(id, updateCvContentDto);
  }

  async remove(id: number) {
     return await this.cvContentRepository.delete(id);
  }
}
