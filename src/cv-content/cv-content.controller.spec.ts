import { Test, TestingModule } from '@nestjs/testing';
import { CvContentController } from './cv-content.controller';
import { CvContentService } from './cv-content.service';

describe('CvContentController', () => {
  let controller: CvContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CvContentController],
      providers: [CvContentService],
    }).compile();

    controller = module.get<CvContentController>(CvContentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
