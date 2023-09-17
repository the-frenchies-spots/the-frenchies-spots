import React from "react";

import {
  ChatEntity,
  MutationInsertChatArgs,
  ProfileEntity,
  mutations,
} from "@frenchies-spots/gql";
import { useMutation } from "@apollo/client";

import { useAuth } from "./use-auth";
import { useRouter } from "next/router";

const useContact = () => {
  const router = useRouter();

  const [insertChat] = useMutation<
    { insertChat: ChatEntity },
    MutationInsertChatArgs
  >(mutations.insertChat);

  const { profile: loginProfile } = useAuth();

  const handleContactClick = (profile: ProfileEntity) => {
    const contact = loginProfile?.contacts?.filter(
      (contact) => contact.profileId === profile.id
    );
    const isContact = contact ? contact?.length > 0 : undefined;
    if (!isContact) {
      insertChat({
        variables: { inserChatInput: { participantIds: [profile.id] } },
      }).then((response) => {
        const id = response?.data?.insertChat?.id;
        if (id) {
          router.push(`/chat/${id}`);
        }
      });
    }
  };

  return { onContactClick: handleContactClick };
};

export default useContact;
