const slogans: string[] = [
  'Innovation pour un monde meilleur',
  "L'excellence en action",
  'Toujours en avant, jamais en arrière',
  'Construire un avenir durable',
  'Un monde connecté, un avenir brillant',
  'Créativité sans limites',
  "L'union fait la force",
  'Toujours plus haut, toujours plus loin',
  "L'avenir est entre nos mains",
  'Ensemble pour un monde meilleur',
  'Passion, persévérance, succès',
  "L'innovation guide notre chemin",
  'Chaque jour est une nouvelle opportunité',
  'La diversité est notre richesse',
  'Penser global, agir local',
  "L'union fait la différence",
  'Inspirer, influencer, innover',
  'Un avenir prometteur, des actions audacieuses',
  'La simplicité dans la complexité',
  'Créer, croître, prospérer',
];

export function sloganFaker(): string {
  const indiceAleatoire = Math.floor(Math.random() * slogans.length);
  return slogans[indiceAleatoire];
}
