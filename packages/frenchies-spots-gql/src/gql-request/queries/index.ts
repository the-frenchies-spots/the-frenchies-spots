import { DocumentNode } from "@apollo/client";

import { getLoginUser } from "./getLoginUser";
import { spotByPk } from "./spotByPk";
import { spots } from "./spots";
import { spotsFavorite } from "./spotsFavorite";
import { tagByPk } from "./tagByPk";
import { tags } from "./tags";
import { profiles } from "./profiles";
import { chatByPk } from "./chatByPk";
import { chats } from "./chats";
import { contacts } from "./contacts";
import { notifications } from "./notifications";

export const queries = {
  getLoginUser,
  spotByPk,
  spots,
  spotsFavorite,
  tagByPk,
  profiles,
  tags,
  chatByPk,
  chats,
  contacts,
  notifications,
} satisfies Record<string, DocumentNode>;
