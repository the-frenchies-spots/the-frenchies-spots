import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

import { ChatBusiness } from '../business/chat.business';
import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';
import { NotificationBusiness } from '../business/notification.business';
import { SendNotifInput } from '../dto/input/notif/send-notif.input';

@WebSocketGateway(+process.env.SOCKET_PORT_URL, { cors: '*:*' })
export class SocketGateway {
  constructor(
    private readonly chatBusiness: ChatBusiness,
    private readonly notifBusiness: NotificationBusiness,
  ) {}

  @WebSocketServer()
  server;
  afterInit() {
    try {
      this.server.engine.ws.perMessageDeflate = false;
    } catch (error) {
      console.error(error);
    }
  }
  @SubscribeMessage('chat')
  async handleChatMessage(
    @MessageBody() payload: SendChatMessageInput,
  ): Promise<void> {
    try {
      console.log('==============================================');
      console.log(payload);

      this.server.emit(`chat:${payload.chatId}`, payload);
      this.chatBusiness.sendMessage(payload);
      console.log('==============================================');
    } catch (error) {
      console.error(error);
    }
  }

  @SubscribeMessage('notif')
  async handleNotification(
    @MessageBody() payload: SendNotifInput,
  ): Promise<void> {
    try {
      this.server.emit(`notif:${payload.profileId}`, payload);
      this.notifBusiness.sendNotif(payload);
    } catch (error) {
      console.error(error);
    }
  }
}
