import { Injectable } from '@nestjs/common';
import { InserChatInput } from '../dto/input/chat/insert-chat.input';
import { ChatEntity } from '../entity/chat.entity';

import { ChatRepository } from '../repository/chat.repository';
import { extractArray } from '../utils/extract-array';
import { ContactRepository } from '../repository/contact.repository';
import ErrorService from '../service/error.service';
import { codeErrors } from '../enum/code-errors.enum';
import { SendChatMessageInput } from '../dto/input/chat/send-chat-message.input';
import { ChatMessageEntity } from '../entity/chat-message.entity';

const { ACCESS_DENIED, INTERNAL_SERVER_ERROR } = codeErrors;

@Injectable()
export class ChatBusiness {
  constructor(
    private chatRepository: ChatRepository,
    private contactRepository: ContactRepository,
  ) {}

  async chats(userId: string): Promise<ChatEntity[]> {
    return this.chatRepository.getAll(userId);
  }

  async sendMessage(
    sendChatMessageInput: SendChatMessageInput,
  ): Promise<ChatMessageEntity> {
    return this.chatRepository.sendMessage(sendChatMessageInput);
  }

  async getByPk(chatId: string, profileId: string): Promise<ChatEntity> {
    const chat = await this.chatRepository.getById(chatId);
    if (!chat) throw new ErrorService(INTERNAL_SERVER_ERROR);
    const profileAuthorize = chat?.participants?.filter(
      (participant) => participant.profileId === profileId,
    )?.length;
    if (!profileAuthorize) throw new ErrorService(ACCESS_DENIED);
    return chat;
  }

  async connectAllContacts(profileIds: string[]): Promise<boolean> {
    profileIds.forEach(async (currentId) => {
      const currentParticipantIds = extractArray(currentId, profileIds);
      const contactConnected = await this.contactRepository.connectContacts(
        currentId,
        currentParticipantIds,
      );
      if (!contactConnected) throw new ErrorService(INTERNAL_SERVER_ERROR);
    });

    return true;
  }

  async insertChat(
    profileId: string,
    inserChatInput: InserChatInput,
  ): Promise<ChatEntity> {
    const { participantIds } = inserChatInput;

    const profileIds = [profileId, ...participantIds];
    await this.connectAllContacts(profileIds);
    return this.chatRepository.createChat(profileId, participantIds);
  }
}
