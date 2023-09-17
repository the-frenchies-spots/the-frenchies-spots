import { ProfileChatEntity } from "@frenchies-spots/gql";

export const getOtherParticipant = (
  participants: ProfileChatEntity[],
  currentProfileId: string
): ProfileChatEntity[] => {
  return participants.filter(
    (participant) => participant.profileId !== currentProfileId
  );
};
