import { Test, TestingModule } from '@nestjs/testing';
import { WebhookApiController } from './webhook-api.controller';
import { WebhookApiService } from './webhook-api.service';

describe('WebhookApiController', () => {
  let controller: WebhookApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebhookApiController],
      providers: [WebhookApiService],
    }).compile();

    controller = module.get<WebhookApiController>(WebhookApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
