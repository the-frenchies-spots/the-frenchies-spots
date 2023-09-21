import React from "react";

import {
  ChatEntity,
  MutationInsertChatArgs,
  ProfileEntity,
  mutations,
  queries,
} from "@frenchies-spots/gql";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const useContact = () => {
  const router = useRouter();

  const [friendRequest] = useMutation<
    { friendRequest: boolean },
    { friendId: string }
  >(mutations.friendRequest, { refetchQueries: [queries.profiles] });

  const [insertChat] = useMutation<
    { insertChat: ChatEntity },
    MutationInsertChatArgs
  >(mutations.insertChat, {
    refetchQueries: [queries.profiles, queries.chats],
  });

  const handleFriendRequestClick = (profile: ProfileEntity) => {
    if (profile) {
      toast.promise(friendRequest({ variables: { friendId: profile.id } }), {
        loading: "Demande en cours d'envoie...",
        success: <b>Demande envoyé !</b>,
        error: <b>Nous avons pas réussi à joindre cette utilisateur.</b>,
      });
    }
  };

  const handleContactClick = (profile: ProfileEntity) => {
    if (profile) {
      const chatId = profile?.profileChats
        ? profile?.profileChats[0]?.chatId
        : undefined;

      if (!chatId) {
        toast.promise(
          insertChat({
            variables: { inserChatInput: { participantIds: [profile.id] } },
          }).then((response) => {
            const id = response?.data?.insertChat?.id;
            if (id) {
              router.push(`/chat/${id}`);
            }
          }),
          {
            loading: "Mise en relation avec votre partenaire...",
            success: <b>Bonne discussion !</b>,
            error: <b>Nous avons pas réussi à joindre cette utilisateur.</b>,
          }
        );
      } else {
        router.push(`/chat/${chatId}`);
      }
    }
  };

  return {
    onContactClick: handleContactClick,
    onFriendRequestClick: handleFriendRequestClick,
  };
};

export default useContact;
