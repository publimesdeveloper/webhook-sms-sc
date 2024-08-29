import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookApiModule } from './webhook-api/webhook-api.module';


@Module({
  imports: [WebhookApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
