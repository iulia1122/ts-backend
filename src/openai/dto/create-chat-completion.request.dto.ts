
import { IsString, IsNotEmpty, IsArray, ValidateNested} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateChatCompletionRequest {
    @IsArray()
    @ValidateNested({each: true})
    @Type(() => ChatCompletionMessageDto)
    messages: ChatCompletionMessageDto[];
}

export class ChatCompletionMessageDto {
    @IsString()
    @IsNotEmpty()
    role: string;

    @IsString()
    @IsNotEmpty()
    content: string;
}