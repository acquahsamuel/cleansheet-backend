import { Test, TestingModule } from '@nestjs/testing';
import { CvContentService } from './cv-content.service';

describe('CvContentService', () => {
  let service: CvContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CvContentService],
    }).compile();

    service = module.get<CvContentService>(CvContentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
