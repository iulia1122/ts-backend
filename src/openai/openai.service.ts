import { Injectable } from '@nestjs/common';
import { ChatCompletionMessageDto } from './dto/create-chat-completion.request.dto';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources';

@Injectable()
export class OpenaiService {
  constructor(private readonly openAi: OpenAI) {}

  async createChatCompletion(messages: ChatCompletionMessageDto[]) {

    try {
      const result = await this.openAi.chat.completions.create({
        messages: messages as ChatCompletionMessageParam[],
        model: "gpt-3.5-turbo-instruct",
      })
      return result;
    } catch(error) {
      return error.error;
    }
  }
}