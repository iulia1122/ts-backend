import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OpenaiService } from './openai.service';
import {CreateChatCompletionRequest } from './dto/create-chat-completion.request.dto'

@Controller('openai')
export class OpenaiController {
  constructor(private readonly openaiService: OpenaiService) {}

  @Post('chatCompletion')
  async createChatCompletion(@Body() body: CreateChatCompletionRequest) {
    return this.openaiService.createChatCompletion(body.messages);
  }
}
