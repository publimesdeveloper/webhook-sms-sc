import { Module } from '@nestjs/common';
import { WebhookApiService } from './webhook-api.service';
import { WebhookApiController } from './webhook-api.controller';

@Module({
  controllers: [WebhookApiController],
  providers: [WebhookApiService],
})
export class WebhookApiModule {}
