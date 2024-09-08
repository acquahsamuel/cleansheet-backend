import { Test, TestingModule } from '@nestjs/testing';
import { ProfExperienceController } from './prof-experience.controller';
import { ProfExperienceService } from './prof-experience.service';

describe('ProfExperienceController', () => {
  let controller: ProfExperienceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProfExperienceController],
      providers: [ProfExperienceService],
    }).compile();

    controller = module.get<ProfExperienceController>(ProfExperienceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
