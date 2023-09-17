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

export const mutations = {
  createOrUpdateRating,
  deleteSpot,
  deleteTag,
  insertSpot,
  insertTag,
  logout,
  signIn,
  signUp,
  toggleFavorite,
  updateSpot,
  upload,
  updateTag,
  buyPoint,
  insertChat,
  updateProfile,
  updateNotifStatus,
} satisfies Record<string, DocumentNode>;
