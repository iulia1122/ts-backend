import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OpenaiModule } from './openai/openai.module';
import { OpenaiController } from './openai/openai.controller';
import { OpenaiService } from './openai/openai.service';
import OpenAI from 'openai';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [OpenaiController],
  providers: [OpenaiService, {
    provide: OpenAI,
    useFactory: (configService: ConfigService) => new OpenAI({ apiKey: configService.getOrThrow('OPENAI_API_KEY')}),
    inject: [ConfigService]
  }],
})
export class AppModule {}
