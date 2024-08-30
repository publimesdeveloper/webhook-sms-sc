import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { WebhookApiInDto } from './dto/webhook-api-in.dto';
import { WebhookApiOutDto } from './dto/webhook-api-out.dto';
import { UpdateWebhookApiDto } from './dto/update-webhook-api.dto';
import * as fs from 'fs';
import * as path from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { WebhookIn } from './entities/webhookIn.entity';
import { Repository } from 'typeorm';
import { WebhookOut } from './entities/webhookOut.entity';

@Injectable()
export class WebhookApiService {

  constructor( @InjectRepository(WebhookIn)
               private readonly WebhookIn: Repository<WebhookIn>,
               @InjectRepository(WebhookOut)
               private readonly WebhookOut: Repository<WebhookOut> ){}

  
  async saveIn(WebhookApiInDto: WebhookApiInDto) {
    console.log(WebhookApiInDto);
    try {
      const webhookIn =  this.WebhookIn.create({
        ...WebhookApiInDto
      })
  
      await this.WebhookIn.save(webhookIn)
  
      return {message: 'Data guardada con Exito'};

    } catch (error) {
      console.log(error)
      throw new InternalServerErrorException('Error inesperado, revisar los datos de entrada o la conexion con la base de datos')
    }
   
  }

  async saveOut(WebhookApiOutDto: WebhookApiOutDto) {
   console.log(WebhookApiOutDto)
   try {
    const webhookOut =  this.WebhookOut.create({
      ...WebhookApiOutDto
    })

    await this.WebhookOut.save(webhookOut)

    return {message: 'Data guardada con Exito'};

  } catch (error) {
    console.log(error)
    throw new InternalServerErrorException('Error inesperado, revisar los datos de entrada o la conexion con la base de datos')
  }
   
  }

 
}
