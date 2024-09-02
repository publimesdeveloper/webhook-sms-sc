import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WebhookApiModule } from './webhook-api/webhook-api.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    WebhookApiModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mssql',
        host: process.env.DB_HOST,  
        port: +process.env.DB_PORT ,           
        username:  process.env.DB_USERNAME,       
        password: process.env.DB_PASSWORD, 
        database:  process.env.DB_NAME,   
        synchronize: false,  
        autoLoadEntities: true,
        options: {
          encrypt: true,
          trustServerCertificate: true,
        },
        requestTimeout: 240000,  // Tiempo de espera en milisegundos
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
