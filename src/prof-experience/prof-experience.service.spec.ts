import { Test, TestingModule } from '@nestjs/testing';
import { ProfExperienceService } from './prof-experience.service';

describe('ProfExperienceService', () => {
  let service: ProfExperienceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProfExperienceService],
    }).compile();

    service = module.get<ProfExperienceService>(ProfExperienceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
