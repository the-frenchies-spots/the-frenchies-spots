// import {
//   ConnectedSocket,
//   MessageBody,
//   SubscribeMessage,
//   WebSocketGateway,
//   WebSocketServer,
// } from '@nestjs/websockets';
// import { Server, Socket } from 'socket.io';
// import { ChatBusiness } from '../business/chat.business';
// import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';

// @WebSocketGateway(+process.env.SOCKET_PORT_URL, { cors: '*:*' })
export class ChatGateway {
  // constructor(private readonly chatBusiness: ChatBusiness) {}
  // @WebSocketServer()
  // server: Server;
  // handleConnextion(client: Socket) {
  //   const { request } = client;
  //   const socketUrl = request.headers.referer; // Obtenez l'URL du client
  //   console.log('==================== CONNECT =========================');
  //   console.log('Socket URL:', socketUrl);
  //   console.log({ client });
  //   console.log('=============================================');
  // }
  // handleDisconnect(client: Socket) {
  //   console.log('==================== DISCONNECT =========================');
  //   console.log({ client });
  //   console.log('=============================================');
  // }
  // @SubscribeMessage('chat')
  // async handleChatMessage(
  //   @MessageBody() payload: SendChatMessageInput,
  //   @ConnectedSocket() client: Socket,
  // ): Promise<void> {
  //   const { request } = client;
  //   const socketUrl = request.headers.referer; // Obtenez l'URL du client
  //   console.log('==================== CONNECT =========================');
  //   console.log('Socket URL:', socketUrl);
  //   console.log({ client });
  //   console.log('=============================================');
  //   this.server.emit(`chat:${payload.chatId}`, payload);
  //   this.chatBusiness.sendMessage(payload);
  // }
}
