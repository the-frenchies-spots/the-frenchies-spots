import { Injectable } from '@nestjs/common';
import { InserChatInput } from 'src/dto/input/chat/insert-chat.input';
import { ChatEntity } from 'src/entity/chat.entity';

import { ChatRepository } from 'src/repository/chat.repository';

@Injectable()
export class ChatBusiness {
  constructor(private chatRepository: ChatRepository) {}

  async insertChat(
    profileId: string,
    inserChatInput: InserChatInput,
  ): Promise<ChatEntity> {
    const { participantIds } = inserChatInput;
    return this.chatRepository.insertChat(profileId, participantIds);
  }
}
