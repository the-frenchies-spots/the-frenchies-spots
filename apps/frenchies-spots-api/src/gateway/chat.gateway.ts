import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { ChatBusiness } from 'src/business/chat.business';
import { SendChatMessageInput } from 'src/dto/input/chat/send-chat-message.input';

@WebSocketGateway(+process.env.SOCKET_PORT_URL, { cors: '*:*' })
export class ChatGateway {
  constructor(private readonly chatBusiness: ChatBusiness) {}

  @WebSocketServer()
  server;
  @SubscribeMessage('chat')
  async handleChatMessage(
    @MessageBody() payload: SendChatMessageInput,
  ): Promise<void> {
    this.server.emit(`chat:${payload.chatId}`, payload);
    this.chatBusiness.sendMessage(payload);
  }
}
