import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WebhookApiService } from './webhook-api.service';
import { WebhookApiInDto } from './dto/webhook-api-in.dto';
import { WebhookApiOutDto } from './dto/webhook-api-out.dto';
import { UpdateWebhookApiDto } from './dto/update-webhook-api.dto';

@Controller('webhook-api')
export class WebhookApiController {
  constructor(private readonly webhookApiService: WebhookApiService) {}

  @Post('listenerEntrada')
  listenerIn(@Body() createWebhookApiDto: WebhookApiInDto) {
    return this.webhookApiService.saveIn(createWebhookApiDto);
  }

  @Post('listenerEnvio')
  listeneOut(@Body() createWebhookApiDto: WebhookApiOutDto) {
    return this.webhookApiService.saveOut(createWebhookApiDto);
  }

}
