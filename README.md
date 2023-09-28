1. Installation des dépendances

# Exécuter « pnpm install » dans un terminal à la racine du monorepo

pour installer les dépendances front – back et les packages partagés.

2. Configuration du backend avec Prisma

# Exécuter la commande « pnpm prisma » afin de générer le

schéma de base de données pour interagir avec les tables de la base
de données dans l'api à la racine du monorepo ou « pnpx prisma generate » à la racine de l'api.

# Exécuter la commande « pnpm seed » à la racine du monorepo.

3. Configuration des variables d’environnement

# Ajout d’une clé pour Stripe : l’API de paiement

# Ajout d’une clé pour Cloudinary : gestionnaire cloud d’images

# Ajout d’une clé pour Mapbox qui est nécessaire au bon

fonctionnement de la carte interactive

# Ajout d’une clé de cryptage

4. Lancer l’application (mode développement / mode test / mode
   production)
   La commande “turbo run dev” permet d’exécuter l'ensemble des projets du
   monorepo. Pour démarrer spécifiquement The Frenchies Spots, le développeur
   doit ajouter l'indicateur “--filter” :
   • Lancement de l’api : “turbo run dev --filter frenchies-spots-api”.
   • Lancement de l’application : “turbo run dev --filter frenchies-spots-webui”.
   Cette flexibilité d'exécution s'étend aux modes de développement, de test et de
   production, facilitant ainsi la gestion des différentes phases de développement.

Pour choisir le mode souhaité il faut changer le prefix (dev, test, prod) :
• “turbo run dev --filter frenchies-spots-api”.
• “turbo run test--filter frenchies-spots-api”.
• “turbo run prod--filter frenchies-spots-api”.

# Commit rules:

- if the task isn't finish add wip to the description
- for the PATH it's "nameProject-api" or "nameProject-front" we've to indicate if it's front or api, this will be usefull to go to a monorepo

- to change the rule of the commit you've to go in the commitlint.config.js file (cf the example where we disable the length of the message which was 100 max)

- feat : is used when you add or continue to work on a fonctionnality
- fix : is used when you fixed, correct a bug
- docs : is used when you add or update the documentation of the project
- build : initialization of the project
- chore : work on ----- other than the build
- pref : improve the performance
- refactor : refatorisation of code
- style : changement of
- test : add or update code test

- Example of a "good" commit
  feat(path): "description what you did"
  fix(path): "description what you fixed"

#### Need help ?

frenchies.spots@gmail.com
