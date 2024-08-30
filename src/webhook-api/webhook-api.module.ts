import { Module } from '@nestjs/common';
import { WebhookApiService } from './webhook-api.service';
import { WebhookApiController } from './webhook-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WebhookIn } from './entities/webhookIn.entity';
import { WebhookOut } from './entities/webhookOut.entity';

@Module({
  controllers: [WebhookApiController],
  providers: [WebhookApiService],
  imports:[
    //aqui defino todas las entidades que este modulo tenga
    TypeOrmModule.forFeature([WebhookIn, WebhookOut]),
    
  ],
})
export class WebhookApiModule {}
