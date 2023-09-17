import { ChatEntity, ChatMessageEntity } from "./graphql";

export * from "./fragment-masking";
export * from "./gql";

export interface NotificationInput {
  profileId: string;
  isRead: boolean;
  content: Record<string, unknown>;
  type: string;
  subject: string;
}

export interface ChatMessageInput {
  chatId: ChatEntity["id"];
  profileChatId: ChatMessageEntity["profileChatId"];
  message: ChatMessageEntity["message"];
}
