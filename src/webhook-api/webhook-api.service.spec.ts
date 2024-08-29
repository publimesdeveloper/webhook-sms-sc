import { Test, TestingModule } from '@nestjs/testing';
import { WebhookApiService } from './webhook-api.service';

describe('WebhookApiService', () => {
  let service: WebhookApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WebhookApiService],
    }).compile();

    service = module.get<WebhookApiService>(WebhookApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
