import { Test, TestingModule } from '@nestjs/testing';
import { AdditionalSkillController } from './additional-skill.controller';
import { AdditionalSkillService } from './additional-skill.service';

describe('AdditionalSkillController', () => {
  let controller: AdditionalSkillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdditionalSkillController],
      providers: [AdditionalSkillService],
    }).compile();

    controller = module.get<AdditionalSkillController>(AdditionalSkillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
