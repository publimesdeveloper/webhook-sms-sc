import { Injectable } from '@nestjs/common';
import { WebhookApiInDto } from './dto/webhook-api-in.dto';
import { WebhookApiOutDto } from './dto/webhook-api-out.dto';
import { UpdateWebhookApiDto } from './dto/update-webhook-api.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class WebhookApiService {

  saveIn(WebhookApiInDto: WebhookApiInDto) {
    console.log(WebhookApiInDto);

    // Ruta del archivo donde se guardará la respuesta
    const filePath = path.join(process.cwd(), 'webhook-in-response.json');

    // Leer el contenido actual del archivo
    let existingData = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingData = JSON.parse(fileContent);
    }

    // Agregar la nueva respuesta al array
    existingData.push(WebhookApiInDto);

    // Guardar el array actualizado en el archivo
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
    return WebhookApiInDto;
   
  }

  saveOut(WebhookApiOutDto: WebhookApiOutDto) {
   console.log(WebhookApiOutDto)
   

    // Ruta del archivo donde se guardará la respuesta
    const filePath = path.join(process.cwd(), 'webhook-out-response.json');

    // Leer el contenido actual del archivo
    let existingData = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      existingData = JSON.parse(fileContent);
    }

    // Agregar la nueva respuesta al array
    existingData.push(WebhookApiOutDto);

    // Guardar el array actualizado en el archivo
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));
   
    return WebhookApiOutDto;
  }

 
}
