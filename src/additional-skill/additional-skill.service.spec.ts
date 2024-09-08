import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalSkillService } from './additional-skill.service';

describe('AdditionalSkillService', () => {
  let service: AdditionalSkillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdditionalSkillService],
    }).compile();

    service = module.get<AdditionalSkillService>(AdditionalSkillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
