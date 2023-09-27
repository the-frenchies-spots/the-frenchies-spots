import React from "react";

import { IconHandOff, IconHandStop } from "@frenchies-spots/icon";
import { ActionIcon, PrimaryButton } from "@frenchies-spots/material";
import { toast } from "react-hot-toast";
import { useStyles } from "./BlockButton.styles";
import { useMutation } from "@apollo/client";
import {
  MutationBlockContactArgs,
  mutations,
  MutationUnBlockContactArgs,
  ProfileEntity,
  queries,
} from "@frenchies-spots/gql";

interface BlockButtonProps {
  isSmallMode?: boolean;
  profile: ProfileEntity | undefined;
  isAuthorize?: boolean;
}

const BlockButton = (props: BlockButtonProps) => {
  // const { isSmallMode = true, isAuthorize = true, profile } = props;

  // const [block, {}] = useMutation<
  //   { blockContact: boolean },
  //   MutationBlockContactArgs
  // >(mutations.blockContact, {
  //   refetchQueries: [queries.profiles, queries.contacts],
  // });

  // const [ubBlock, {}] = useMutation<
  //   { unBlockContact: boolean },
  //   MutationUnBlockContactArgs
  // >(mutations.unBlockContact, {
  //   refetchQueries: [queries.profiles, queries.contacts],
  // });

  // const handleBlock = () => {
  //   if (profile) {
  //     toast.promise(block({ variables: { blockContactId: profile.id } }), {
  //       loading: "Blockage en cours...",
  //       success: <b>Votre amis est bloqué</b>,
  //       error: <b>Une erreur est survenue.</b>,
  //     });
  //   }
  // };

  // const handleUnBlock = () => {
  //   if (profile) {
  //     toast.promise(ubBlock({ variables: { blockContactId: profile.id } }), {
  //       loading: "Débloquage en cours...",
  //       success: <b>Votre amis est débloqué</b>,
  //       error: <b>CUne erreur est survenue.</b>,
  //     });
  //   }
  // };

  // const { classes } = useStyles();

  // const Icon = isAuthorize ? IconHandStop : IconHandOff;

  // if (!isSmallMode)
  //   return (
  //     <PrimaryButton
  //       variant="outline"
  //       onClick={isAuthorize ? handleBlock : handleUnBlock}
  //       color="red"
  //       leftIcon={<Icon className={classes.icon} />}
  //     >
  //       Blocker
  //     </PrimaryButton>
  //   );
  // return (
  //   <ActionIcon
  //     className={classes.button}
  //     onClick={isAuthorize ? handleBlock : handleUnBlock}
  //   >
  //     <IconHandStop className={classes.icon} />
  //   </ActionIcon>
  // );
  return null;
};

export default BlockButton;
