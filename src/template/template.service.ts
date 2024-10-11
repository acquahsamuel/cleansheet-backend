import { Injectable } from '@nestjs/common';
import { CreateTemplateDto } from './dto/create-template.dto';
import { UpdateTemplateDto } from './dto/update-template.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Template } from './entities/template.entity';

@Injectable()
export class TemplateService {
  constructor(
    @InjectRepository(Template)
    private readonly templateRepository: Repository<Template>,
  ) {}

  
  /**
   * Create a new template and save it to the database.
   * @param createTemplateDto The template data to create.
   * @returns The created template.
   */
  async create(createTemplateDto: CreateTemplateDto): Promise<Template> {
    const template = await this.templateRepository.create(createTemplateDto);
    return this.templateRepository.save(template);
  }

  /**
   * Retrieve all templates from the database.
   * @returns An array of templates.
   */
  async findAll(): Promise<Template[]> {
    return await this.templateRepository.find();
  }

  /**
   * Create a new template and save it to the database.
   * @param createTemplateDto The template data to create.
   * @returns The created template.
   */
  async findOne(id: number): Promise<Template> {
    return await this.templateRepository.findOneBy({ id });
  }

  /**
   * Update a template by its ID.
   * @param id The ID of the template to update.
   * @param updateTemplateDto The template data to update.
   * @returns The updated template.
   */
  async update(id: number, updateTemplateDto: UpdateTemplateDto) {
    await this.templateRepository.update(id, updateTemplateDto);
    return this.templateRepository.findOneBy({ id });
  }

  /**
   * Remove a template by its ID.
   * @param id The ID of the template to remove.
   */
  async remove(id: number): Promise<void> {
    await this.templateRepository.delete(id);
  }
}
