import React from "react";

import { IconBellFilled } from "@frenchies-spots/icon";
import {
  ActionIcon,
  Popover,
  BadgeIcon,
  Font,
  Box,
  Stack,
  Divider,
} from "@frenchies-spots/material";
import { useStyles } from "./Notifiction.styles";
import { useMediaQuery } from "@frenchies-spots/hooks";
import { useNotif } from "../../hooks";
import ProfileCard from "../Profile/ProfileCard/ProfileCard";
import { useMutation } from "@apollo/client";
import { mutations, queries } from "@frenchies-spots/gql";
import { useRouter } from "next/router";

interface NotifictionProps {
  isMapMode: boolean;
}

const Notifiction = (props: NotifictionProps) => {
  const { isMapMode } = props;

  const router = useRouter();
  const { notifications } = useNotif();
  const { classes } = useStyles(isMapMode);
  const [updateNotifStatus] = useMutation(mutations.updateNotifStatus, {
    refetchQueries: [queries.appNotification],
  });

  const handleNotificationClick = (id: string) => {
    router.push(`/request/${id}`);
  };

  const handleClick = () => {
    updateNotifStatus();
  };

  const isSmallScreen = useMediaQuery("(max-width: 768px)");
  return (
    <Box onClick={handleClick}>
      <Popover
        width={isSmallScreen ? "95%" : 500}
        position="bottom-end"
        withArrow
        shadow="md"
      >
        <Popover.Target>
          <ActionIcon className={classes.actionIcon}>
            <BadgeIcon
              content={
                notifications?.filter((_notif) => !_notif.isRead)?.length || 0
              }
            >
              <IconBellFilled />
            </BadgeIcon>
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          {notifications?.length > 0 ? (
            notifications?.map((notif) => (
              <ProfileCard
                key={notif.id}
                profile={notif.profileSender}
                customSlogan="Demande d'ami"
                onClick={() => handleNotificationClick(notif.id)}
                mb="sm"
              >
                <IconBellFilled style={{ color: "EBA701" }} />
              </ProfileCard>
            ))
          ) : (
            <Font>Pas de notification en cours</Font>
          )}
        </Popover.Dropdown>
      </Popover>
    </Box>
  );
};

export default Notifiction;
