export interface TagsRequestResult {
  tags: Tag[];
}

export interface Tag {
  id: string;
  name: string;
  tagPictureUrl: string;
  category: "SPARE_TIME_SPOT" | "RESOURCES_SPOT";
}

export type TCategory = "SPARE_TIME_SPOT" | "RESOURCES_SPOT";
