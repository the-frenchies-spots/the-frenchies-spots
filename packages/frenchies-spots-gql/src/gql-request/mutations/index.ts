import { DocumentNode } from "@apollo/client";

import { createOrUpdateRating } from "./createOrUpdateRating";
import { deleteSpot } from "./deleteSpot";
import { deleteTag } from "./deleteTag";
import { insertSpot } from "./insertSpot";
import { insertTag } from "./insertTag";
import { logout } from "./logout";
import { signIn } from "./signIn";
import { signUp } from "./signUp";
import { toggleFavorite } from "./toggleFavorite";
import { updateSpot } from "./updateSpot";
import { updateTag } from "./updateTag";
import { buyPoint } from "./buyPoint";
import { updateProfile } from "./updateProfile";
import { insertChat } from "./insertChat";
import { upload } from "./upload";
import { updateNotifStatus } from "./updateNotifStatus";
import { sendChatMessage } from "./sendChatMessage";
import { markChatMessageAsRead } from "./markChatMessageAsRead";
import { sendNotif } from "./sendNotif";
import { friendRequest } from "./friendRequest";
import { acceptFriendContact } from "./acceptFriendContact";
import { updateContact } from "./updateContact";
import { deleteNotif } from "./deleteNotif";
import { buyAvatar } from "./buyAvatar";
import { deleteAccount } from "./deleteAccount";
import { blockContact } from "./blockContact";
import { unBlockContact } from "./unBlockContact";

export const mutations = {
  createOrUpdateRating,
  deleteSpot,
  deleteTag,
  blockContact,
  insertSpot,
  insertTag,
  logout,
  signIn,
  unBlockContact,
  signUp,
  toggleFavorite,
  updateSpot,
  friendRequest,
  updateContact,
  deleteNotif,
  buyAvatar,
  upload,
  sendNotif,
  updateTag,
  buyPoint,
  insertChat,
  updateProfile,
  sendChatMessage,
  updateNotifStatus,
  acceptFriendContact,
  deleteAccount,
  markChatMessageAsRead,
} satisfies Record<string, DocumentNode>;
