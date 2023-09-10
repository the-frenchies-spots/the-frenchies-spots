import { registerEnumType } from '@nestjs/graphql';

export enum CategoriesSpotAndTag {
  SPARE_TIME_SPOT = 'SPARE_TIME_SPOT',
  RESOURCES_SPOT = 'RESOURCES_SPOT',
}

registerEnumType(CategoriesSpotAndTag, {
  name: 'CategoriesSpotAndTag', // Le nom de l'enum dans GraphQL
  description: 'Les catégories pour les spots et les tags', // Description optionnelle
});
