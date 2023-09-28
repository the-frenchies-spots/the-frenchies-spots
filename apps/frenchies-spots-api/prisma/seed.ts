import { Prisma, PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const clearDatabase = async () => {
  console.log('--------------------------');
  console.log('Suppression des tables...');
  await prisma.favorite.deleteMany({});
  await prisma.rating.deleteMany({});
  await prisma.spotPicture.deleteMany({});
  await prisma.notification.deleteMany({});
  await prisma.tagsOnSpots.deleteMany({});
  await prisma.chatMessage.deleteMany({});
  await prisma.contact.deleteMany({});
  await prisma.profileChat.deleteMany({});
  await prisma.chat.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.profile.deleteMany({});
  console.log('--------------------------');
  console.log('Suppression terminée');
};

const userData: Prisma.UserCreateInput[] = [
  {
    email: 'alice@prisma.io',
    hashedPassword: 'Alice',
    hashedRefreshToken: 'token',
    role: 'SIMPLE_USER',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '640779bca1e1a3dc3fb33dc5',
        pseudo: 'AliceMerveille',
        photoUrl: 'url',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '640779bca1e1a3dc3fb33dc4',
              name: 'La dune du Pilat',
              description: `La dune du Pilat gardienne du bassin d’Arcachon, mérite son titre de plus haute dune d’Europe. Unique par ses dimensions : 117 m de hauteur, 2,7 km de longueur, 500 m de largeur, son ascension est largement récompensée par la vue que nous réserve le site, il est d’une beauté exceptionnelle. Aux couleurs marines, vert des pins, doré du sable s’ajoute le parfum d’iode et d’odeurs balsamiques.`,
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-0.9236623, 43.9359823],
              },
              region: '75',
              address: 'Av. de Biscarrosse, 33115 La Teste-de-Buch, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674996522/travelerSpot/dune_du_pilat.png',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dacefaa522e8ce4a447f6',
                  },
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33dc6',
              name: 'Le pic de la Rhune',
              description:
                'Au Pays Basque, La Rhune protège jalousement la côte. Ce site est un lieu enchanteur parcouru de pistes pastorales, d’où s’y dégage une ambiance mystérieuse et secrète. On y découvre des cromlechs, ces blocs dressés en cercle orientés vers le soleil, on y entend de nombreuses légendes, on y rencontre des pottoks petits chevaux autochtones à demi sauvages. Et puis n’hésitez pas à emprunter le Petit Train de la Rhune, train à crémaillère : un trajet de 30 minutes à 8 km/h.',
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.63507, 43.30888],
              },
              region: '75',
              address: 'Col de Saint-Ignace, 64310 Sare, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674996742/travelerSpot/pic_de_la_rhune.png',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dace3aa8cb5748dea534d',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33dc7',
              name: 'Parc National Pyrénées',
              description: `Un panorama inouï vous attend en Béarn. Vous êtes en haute montagne, dans le Parc National des Pyrénées. En arrivant à Artouste on assiste à une extraordinaire variété de paysages où alternent une kyrielle d’aiguilles, de vastes pâturages, ou de grandes étendues de forêts de hêtres ou de sapins, de lacs... Une superbe occasion pour voir voler au-dessus de vos têtes : aigles royaux, faucons pèlerins ou vautours fauves veillant sur cette vallée de rêve. Impressionnant, le petit train d’Artouste (à 2000 m d’altitude) qui se déplace le long de la ligne ferroviaire la plus haute d’Europe. Visite à faire absolument.`,
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-0.12042045593261719, 42.8962287902832],
              },
              region: '75',
              address:
                'Pôle d’activités – Ferme d’Icart, 09240 Montels, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674997283/travelerSpot/parc_national_des_pyrenees.png',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dace3aa8cb5748dea534d',
                  },
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: 'pierre@prisma.io',
    hashedPassword: 'Pierre',
    hashedRefreshToken: 'token2',
    role: 'SIMPLE_USER',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '640779bca1e1a3dc3fb33dc8',
        pseudo: 'PierrePrésent',
        photoUrl: 'url',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '640779bca1e1a3dc3fb33dc9',
              name: 'Falaises Meschers',
              description:
                'Au sud de Royan, les falaises de Meschers-sur-Gironde longeant la « Côte de beauté » et faisant face au Médoc, surplombent le plus grand estuaire d’Europe à plus de 30 mètres de haut. Un patrimoine inestimable parcouru de grottes et d’habitations troglodytiques sur une distance de 1500 m. Les grottes du Régulus et de Matata sont aménagées et ouvertes au public. Le plus bel endroit, pour observer les falaises blanches de Meschers, se situe dans le magnifique village de Talmont-sur-Gironde.',
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-0.956417, 45.557484],
              },
              region: '75',
              address:
                '81 Bd de la Falaise, 17132 Meschers-sur-Gironde, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674997660/travelerSpot/falaises_meschers.png',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dace3aa8cb5748dea534d',
                  },
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                  {
                    tagId: '641dacefaa522e8ce4a447f6',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d10',
              name: 'Bort en Limousin',
              description:
                'Au cœur du Massif Central, nous sommes dans la vallée de la Haute Dordogne. A 437 m d’altitude les orgues de Bort sommeillent. C’est une merveille naturelle surgie des entrailles de la Terre. Monument naturel composé d’une succession de colonnes verticales qui évoquent l’instrument de musique.',
              isCanPark: true,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [1.7, 45.76667],
              },
              region: '75',
              address: 'Fôret Rue du Moulin, 19110 Bort-les-Orgues, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674998074/travelerSpot/bort_en_limousin.png',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d11',
              name: 'Forêt des Landes',
              description:
                "La forêt des Landes de Gascogne est un massif forestier du sud-ouest de la France situé en Nouvelle-Aquitaine. D'une superficie de près d'un million d'hectares, elle est la plus grande forêt artificielle d'Europe occidentale conduite intensivement et majoritairement en une monoculture de pins maritimes.",
              isCanPark: true,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-0.9236623, 43.9359823],
              },
              region: '75',
              address:
                '70 Rue Jean-Charles de Borda, 40370 Rion-des-Landes, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674998414/travelerSpot/foret_des_landes.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: 'jerome@prisma.io',
    hashedPassword: 'Jerome',
    hashedRefreshToken: 'token3',
    role: 'SIMPLE_USER',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '640779bca1e1a3dc3fb33d12',
        pseudo: 'JeromeDeLaDrome',
        photoUrl: 'url',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '640779bca1e1a3dc3fb33d13',
              name: 'Golfe du Morbihan',
              description:
                "Le golfe du Morbihan est une mer intérieure d'une longueur est-ouest de 20 kilomètres environ parsemée de nombreuses îles et îlots. C'est une destination prisée pour la beauté de ses paysages couvrant une centaine de kilomètres carrés, située en Bretagne, dans le département du Morbihan auquel il a donné son nom.",
              isCanPark: false,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-2.769661, 47.562968],
              },
              region: '53',
              address: '8 bd Iles, 56000 Vannes, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674999175/travelerSpot/golfe_du_morbihan.png',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad123334351ea3562d2c',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d14',
              name: 'Dentelles de Montmirail',
              description:
                "Les Dentelles de Montmirail, situées dans le département français de Vaucluse, sont une chaîne de montagne qui marque la limite occidentale des monts de Vaucluse. Elles sont situées au nord de Carpentras, au sud de Vaison-la-Romaine et à l'ouest du mont",
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [5.060538, 44.179423],
              },
              region: '93',
              address: "Rue de L'église, 84190 Lafare, France",
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674999260/travelerSpot/dentelles_de_montmirail.png',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dace3aa8cb5748dea534d',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d15',
              name: 'Gorges du Toulourenc',
              description:
                'Gorges boisées où randonner et patauger avec petites plages et bassins naturels au pied du mont Ventoux.',
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [5.291937, 44.202515],
              },
              region: '84',
              address: "Montée de l'Ancien Fort, 84340 Malaucène, France",
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674999639/travelerSpot/gorges_du_toulourenc.png',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                  {
                    tagId: '641dad0ae575f3177b56447b',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d16',
              name: 'Forêt de Broceliande',
              description:
                "La forêt de Paimpont, appelée forêt de Brécilien jusqu'au XVᵉ siècle, souvent identifiée à Brocéliande, forêt mythique et enchantée de la légende arthurienne, est située autour de Paimpont dans le département d'Ille-et-Vilaine en Bretagne, à environ 30 km au sud-ouest de Rennes.",
              isCanPark: false,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-2.132837, 48.030483],
              },
              region: '53',
              address: 'Esplanade de Brocéliande, 35380 Paimpont, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1674999852/travelerSpot/foret_de_broceliande.png',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d17',
              name: 'Pic du Canigou',
              description:
                "Le pic du Canigou est le haut sommet oriental de la chaîne des Pyrénées, sur le massif du Canigou. Il est situé dans le Conflent, département des Pyrénées-Orientales, et culmine à 2 784 mètres d'altitude.",
              isCanPark: true,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [2.455712, 42.518597],
              },
              region: '75',
              address: '36 Avenue Clemenceau, 66820 Vernet-les-Bains, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675000410/travelerSpot/pic_du_canigou.png',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dace3aa8cb5748dea534d',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: 'brice@prisma.io',
    hashedPassword: 'Brice',
    hashedRefreshToken: 'token4',
    role: 'SIMPLE_USER',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '640779bca1e1a3dc3fb33d18',
        pseudo: 'BriceDeNice',
        photoUrl: 'url',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '640779bca1e1a3dc3fb33d19',
              name: 'Colorado Provençal',
              description:
                "Le Colorado provençal est un ancien site industriel, exploité de la fin du XVIIᵉ siècle jusqu'en 1992, quand le dernier ocrier prit sa retraite.",
              isCanPark: true,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [5.5005963, 43.9195564],
              },
              region: '93',
              address:
                'RD22 parking des mille couleurs RD22 parking des mille couleurs, 84400 Rustrel',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675335702/travelerSpot/colorado_provencal.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d20',
              name: 'Calanques de Marseille',
              description:
                "Les Calanques, connues aussi sous l'appellation calanques de Marseille ou calanques de Cassis ou encore massif des Calanques, sont constituées d'une succession d'anses et de criques s'étendant sur plus de vingt kilomètres de côtes sur la mer Méditerranée.",
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [5.40348, 43.228732],
              },
              region: '93',
              address:
                'Al Fourqane la cayolle, Boulevard des Calanques, 13009 Marseille, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675336002/travelerSpot/calanques_de_marseille.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad123334351ea3562d2c',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d21',
              name: 'Lac de Serre-Ponçon',
              description:
                'Au cœur des Alpes du sud, le lac de Serre-Ponçon est une destination de rêve pour les amateurs de loisirs nautiques, de baignade et de bronzage !',
              isCanPark: true,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [6.3163021, 44.5000426],
              },
              region: '93',
              address: 'Lac de Serre Ponçon, 05160 Savines le Lac, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675336306/travelerSpot/lac_de%20_serre-poncon.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad0ae575f3177b56447b',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d22',
              name: 'Lafitenia - Saint-Jean de Luz',
              description:
                'Plage de sable et galets, elle se situe près des campings du quartier d’Acotz. Cette plage est le coin préféré des surfeurs confirmés qui affronteront la vague gauche de rochers située un peu au large.',
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.66267, 43.38871],
              },
              region: '75',
              address: 'Chem. de Lafitenia, 64500 Saint-Jean-de-Luz, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675336550/travelerSpot/lafiteria_saint-jean_de_luz.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                  {
                    tagId: '641dacefaa522e8ce4a447f6',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d23',
              name: 'Guéthary',
              description:
                'Guéthary est un village typiquement basque, ancien port de pêche à la baleine.',
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.6062693, 43.423001],
              },
              region: '75',
              address: '199 Rue Edouard Gélos, 64210 Guéthary, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675336918/travelerSpot/guethary.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                  {
                    tagId: '641dacefaa522e8ce4a447f6',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: 'Ludovic@prisma.io',
    hashedPassword: 'Ludovic',
    hashedRefreshToken: 'token5',
    role: 'SIMPLE_USER',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '640779bca1e1a3dc3fb33d24',
        pseudo: 'LudovicCruchot',
        photoUrl: 'url',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '640779bca1e1a3dc3fb33d25',
              name: 'Les Gorges du Verdon',
              description:
                'Creusé par la rivière Verdon, au cœur des Alpes de Haute-Provence, le plus grand canyon d’Europe se dévoile avec ses falaises de calcaire majestueuses, son eau couleur émeraude et ses paysages alentours à couper le souffle.',
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [6.3285616, 43.7496562],
              },
              region: '93',
              address:
                '5685 Route de la Maline, 04120 La Palud-sur-Verdon, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675337241/travelerSpot/gorges_du_verdon.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad0ae575f3177b56447b',
                  },
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d26',
              name: 'Pays de Sault',
              description:
                'Une mosaïque de champs de lavandes, de petit épeautre et de blé, avec, au centre, le village de Sault, blanc et minéral, posé sur un roc.',
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [0.3771322, 47.8006543],
              },
              region: '76',
              address: 'Route Forestière des Trembles, 72500 Jupilles, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675338025/travelerSpot/pays_de_sault.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d27',
              name: 'Saint-Tropez',
              description:
                "Appréciée depuis longtemps par les artistes, la ville attirait la 'jet set' internationale dans les années 1960, et séduit toujours pour ses plages et sa vie nocturne. Le quartier pavé de La Ponche témoigne de son passé de village de pêcheurs, même si les yachts sont désormais plus nombreux que les bateaux de pêche dans le Vieux Port.",
              isCanPark: true,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [6.6405225, 43.2727191],
              },
              region: '93',
              address:
                "2 place de l'Hôtel-de-Ville, 83990 Saint-Tropez, France",
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675338220/travelerSpot/saint-tropez.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d28',
              name: 'Bormes-les-Mimosas',
              description:
                'Bormes-les-Mimosas est un superbe village médiéval du XIIᵉ siècle aux allures de crèche provençale. Il séduit les amoureux de vieilles pierres et de patrimoine, tout comme les amateurs de farniente, désireux de se trouver un petit coin de paradis au soleil.',
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [6.3419285, 43.1506968],
              },
              region: '93',
              address:
                '1 Place Saint-François, 83230 Bormes les Mimosas, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675338575/travelerSpot/bormes-les-mimosas.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: 'godefroy@prisma.io',
    hashedPassword: 'Godefroy',
    hashedRefreshToken: 'token6',
    role: 'SIMPLE_USER',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '640779bca1e1a3dc3fb33d29',
        pseudo: 'GodefroyDeMontmirail',
        photoUrl: 'url',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '640779bca1e1a3dc3fb33d30',
              name: 'Le Mont Saint-Michel',
              description:
                "Classé au patrimoin de l'UNESCO, le Mont-Saint-Michel est un ensemble sans équivalent tant par la coexistence de l’abbaye et de son village fortifié sur l’espace resserré d’un îlot, que par l’agencement original des bâtiments qui lui confère une silhouette inoubliable. C'est un des hauts lieux de la civilisation chrétienne médiévale.",
              isCanPark: true,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.51146, 48.6359541],
              },
              region: '28',
              address: 'La Caserne, 50170 le Mont Saint Michel, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675339060/travelerSpot/mont_saint-michel.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                  {
                    tagId: '641dace3aa8cb5748dea534d',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d31',
              name: 'La citadelle des Baux-de-Provence',
              description:
                "Erigée au XIe siècle sur un éperon rocheux au cœur des Alpilles, la citadelle des Baux-de-Provence comprend le Château des Baux-de-Provence et son village. Ancienne place forte médiévale, le majestueux château fort semi-troglodytique figure parmi les plus anciens édifices féodaux d'Europe.",
              isCanPark: false,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [4.79607, 43.74425],
              },
              region: '93',
              address: 'Grand Rue, 13520 Les Baux-de-Provence, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675339378/travelerSpot/la_citadelle_des_baux-de-provence.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d32',
              name: 'Belvédère de la tête de chien',
              description:
                "Petite balade dans les calanches de Piana, principalement en sous-bois, de la Tête de Chien jusqu'à un belvédère avec vue sur le château-fort.",
              isCanPark: false,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.8419225, 46.5781239],
              },
              region: '93',
              address: 'Rte de la Tête de Chien, 06320 La Turbie, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675339696/travelerSpot/belvedere_de_la_tete_de_chien.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d34',
              name: 'Le Mont Blanc',
              description:
                "Le mont Blanc, dans le massif du Mont-Blanc, est le point culminant de la chaîne des Alpes. Avec une altitude de 4 808 mètres, il est le plus haut sommet d'Europe occidentale et le sixième sur le plan continental.",
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [6.8727437, 45.9250255],
              },
              region: '84',
              address:
                "100 Pl. de l'Aiguille du Midi, 74400 Chamonix-Mont-Blanc, France",
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675340008/travelerSpot/mont-blanc.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dace3aa8cb5748dea534d',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d35',
              name: 'Deauville',
              description:
                'La belle Deauville est connue des afficionados en tout genre : ceux des courses hippiques, les golfeurs, les amateurs de cinéma, ou encore de casino. Une destination de prestige donc, ou vous trouverez des gens avec des cheveux gominés, qui promènent des petits chiens en manteau.',
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [0.0752778, 49.36],
              },
              region: '28',
              address: '20 Rue Robert Fossorier, 14800 Deauville, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675340189/travelerSpot/deauville.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dad01b6acd761acf471d5',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: 'merlin@prisma.io',
    hashedPassword: 'Merlin',
    hashedRefreshToken: 'token7',
    role: 'SIMPLE_USER',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '640779bca1e1a3dc3fb33d36',
        pseudo: 'MerlinEnchanteur',
        photoUrl: 'url',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '640779bca1e1a3dc3fb33d37',
              name: 'La vallée des merveilles',
              description:
                "Observatoire cosmique pour certains, voyage initiatique pour d'autres, la Vallée des Merveilles interpelle avec ses 40 000 gravures rupestres pleines. Elle est également connue en italien sous le nom de Valle delle Meraviglie et fait partie du Parc National du Mercantour.",
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [7.465714931488037, 44.09109115600586],
              },
              region: '93',
              address: 'Vallée des Merveilles, 06430 Tende, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675340496/travelerSpot/la_vallee_des_merveilles.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d38',
              name: "Falaises d'Etretat",
              description:
                "Entourée des impressionnantes falaises d'amont et d'aval, la plage d'Etretat fait incontestablement partie des plus belles plages de Normandie.",
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [0.2031905, 49.7074621],
              },
              region: '28',
              address: '6 Rue Alphonse Karr, 76790 Étretat, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675340731/travelerSpot/falaises_etretat.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dacefaa522e8ce4a447f6',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d39',
              name: 'La Côte de Granit Rose',
              description:
                "Sur ce littoral breton, on voit la vie en rose ! Véritable paysage de cartes postales, la côte de Granit Rose dévoile ses courbes de Trebeurden à Ploumanac'h aux détours de criques et de chaos gigantesques.",
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-3.4844446, 48.8317817],
              },
              region: '53',
              address: "Ploumanac'h, 22700 Perros-Guirec, France",
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675341001/travelerSpot/cote_de_granit_rose.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dacefaa522e8ce4a447f6',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d40',
              name: 'Menhirs de Carnac',
              description:
                'Parcourez le plus grand ensemble mégalithique de ce type au monde, haut-lieu de la préhistoire européenne.',
              isCanPark: false,
              isHidden: true,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-3.0794428, 47.5836629],
              },
              region: '53',
              address: '5 Chem. de Pouldeve, 56340 Carnac, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675341145/travelerSpot/menhir_de_carnac.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d41',
              name: 'Etang de Trémelin',
              description:
                'Le « lac de Trémelin » est un superbe étang de près de 45 ha. Le plan d’eau et le domaine forestier forment un site naturel de 220 ha à la richesse écologique exceptionnelle. Le site, labellisé Station Verte, accueille de nombreuses activités de loisirs.',
              isCanPark: false,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-2.0281004, 48.0964125],
              },
              region: '53',
              address: 'Étang de Trémelin, 35750 Iffendic, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1675341477/travelerSpot/etang_de_tremelin.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                  {
                    tagId: '641dad0ae575f3177b56447b',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d42',
              name: 'Source de jouvence',
              description:
                "Eau potable qui nous redonne un élan de jeunesse et le courage pour poursuivre notre chemin. Seul bémol vous ne pouvez vous garer qu'à seulement 2km ! ",
              isCanPark: false,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [6.24162281675221, 44.13387079092109],
              },
              region: '93',
              address: 'Route du Clos de Jalines, 04420 Marcoux, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770042/source_de_jouvence.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad195f6b8d0a81ee3db1',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d43',
              name: 'Retour au propre',
              description:
                'Trouver tout ce qui est nécessaire à une toilette quotidienne.',
              isCanPark: true,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [4.341849718899424, 44.82106082769287],
              },
              region: '84',
              address: 'Route du Cheylard, 07530 Mézilhac, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770068/retour_au_propre.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad195f6b8d0a81ee3db1',
                  },
                  {
                    tagId: '641dad383aa7777cc5a6aa07',
                  },
                  {
                    tagId: '641dad308b90f8cb14c62e90',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d44',
              name: 'Force pour votre fidèle compagnon',
              description:
                'Vous cherchez de quoi donner à boire à votre partenaire roulant, foncez à cette station service.',
              isCanPark: false,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [1.4209587, 43.6153093],
              },
              region: '76',
              address: '55 Bd de Suisse, 31200 Toulouse, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770052/force_fidele_compagnon.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad3f43b25ce5445ac002',
                  },
                  {
                    tagId: '641dad477d3480f05227d8e3',
                  },
                  {
                    tagId: '641dad308b90f8cb14c62e90',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d45',
              name: 'Arrêtez vous belle au bois dormant',
              description:
                'Faites attention à vous, vous vous sentez fatigués, rendez-vous ici pour vous reposer et reprendre la route plus sereinement.',
              isCanPark: true,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [5.547799188391234, 43.54902124776626],
              },
              region: '93',
              address:
                'Descente des Jardins, 13100 Saint-Marc-Jaumegarde, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770042/belle_au_bois_dormant.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad22c7de24bec65eaca2',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d46',
              name: 'La guerre aux tâches',
              description:
                'Vous avez besoin de laver vos vêtements cette laverie est super et pas trop cher',
              isCanPark: true,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.08014, 44.9812637],
              },
              region: '75',
              address: "42 Av. de la Côté d'Argent, 33680 Lacanau, France",
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770041/la_guerre_aux_taches.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad297c5032d0440f3a00',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d47',
              name: 'Nuit à la belle étoile',
              description:
                "Vous avez besoin de vous reposer et de faire votre toilette soyez tranquille c'est l'endroit qu'il vous faut.",
              isCanPark: true,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.1434696, 44.9672453],
              },
              region: '75',
              address:
                'Plage de la Grande Escoure All. du Club de Voile, 33680 Lacanau, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770042/nuit_belle_etoile.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad22c7de24bec65eaca2',
                  },
                  {
                    tagId: '641dad308b90f8cb14c62e90',
                  },
                  {
                    tagId: '641dad383aa7777cc5a6aa07',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d48',
              name: 'Boost gasoil',
              description:
                "Trouvez votre or noir favori ! L'essence c'est la vie.",
              isCanPark: true,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [1.0572, 45.1857],
              },
              region: '75',
              address: 'Route de l´Esparre, 33990 Hourtin, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770040/boost_gazoil.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad477d3480f05227d8e3',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d49',
              name: 'Toilettes',
              description: 'Libérez-vous, ne vous retenez plus.',
              isCanPark: true,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [-3.1664424, 47.6174511],
              },
              region: '53',
              address: 'Kerhillio, 56410 Erdeven, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770050/toilettes.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad308b90f8cb14c62e90',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d50',
              name: 'Recharge',
              description:
                "Redonnez de l'énergie à vos appareils électroniques.",
              isCanPark: true,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [0.7433467, 47.4136093],
              },
              region: '24',
              address: 'La Rainerie, 37170 Chambray-lès-Tours, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770042/recharge.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad3f43b25ce5445ac002',
                  },
                  {
                    tagId: '641dad308b90f8cb14c62e90',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d51',
              name: 'Laverie du coin',
              description:
                "Besoin de laver votre linge, c'est ici que ça se passe.",
              isCanPark: false,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.1499248, 45.1535515],
              },
              region: '75',
              address: '81 Avenue de la Plage, 33680 Lacanau, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770040/laverie_du_coin.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad297c5032d0440f3a00',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d52',
              name: 'Alimentation du coin',
              description: 'Besoin de ravitailler, venez vous faire plaisir.',
              isCanPark: false,
              isHidden: false,
              category: 'RESOURCES_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.1582704, 45.1629117],
              },
              region: '75',
              address: '2 Avenue de Bordeaux, 33680 Lacanau, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770040/alimentation_du_coin.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad297c5032d0440f3a00',
                  },
                ],
              },
            },
            {
              id: '640779bca1e1a3dc3fb33d53',
              name: 'Nature en danger',
              description:
                'Prenez conscience de la nature qui vous entoure, elle est précieuse.',
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-1.1579991, 45.1635548],
              },
              region: '75',
              address: '2 Avenue de Bordeaux, 33680 Lacanau, France',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/db00tntyg/image/upload/v1680770042/nature_en_danger.jpg',
                    hostId: '',
                  },
                ],
              },
              averageRating: 0,
              tags: {
                create: [
                  {
                    tagId: '641dad297c5032d0440f3a00',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
  {
    email: 'morgane@gmail.com',
    hashedPassword:
      '$2a$10$4QGGpe.0G5m2mRNe9.QduehJEIMvsS5x5rSZkSXTDhChAzlRx/Mx.',
    hashedRefreshToken: '',
    role: 'SIMPLE_USER',
    createdAt: '2023-09-17T08:18:13.241+00:00',
    updatedAt: '2023-09-17T08:18:13.241+00:00',
    profile: {
      create: {
        id: '651557f1f3036c6e13493233',
        isLocated: true,
        pseudo: 'Morgane',
        slogan: "Le thé c'est la vie !",
        avatarUrl:
          'https://res.cloudinary.com/dw2hb8vmu/image/upload/v1695396220/frenchies-spots/avatar/AVATAR_2_hjflww.gif',
        photoUrl:
          'https://res.cloudinary.com/dw2hb8vmu/image/upload/v1695897525/MorganeImage_dzheor.png',
        gamePoint: 0,
        spots: {
          create: [
            {
              id: '651563124b186e7fea81ca5f',
              name: 'Bois du Bouscat',
              description:
                'Très agréable, ombragé avec des bancs. Le règlement est très bien fait de sorte que tout le monde puisse en profiter.',
              isCanPark: true,
              isHidden: false,
              category: 'SPARE_TIME_SPOT',
              location: {
                type: 'Point',
                coordinates: [-0.620325, 44.87281],
              },
              region: '33',
              address:
                'Bois du Bouscat, 36 Bd du Maréchal Lyautey, 33110 Le Bouscat',
              spotPicture: {
                create: [
                  {
                    url: 'https://res.cloudinary.com/dw2hb8vmu/image/upload/v1695900262/BOIS_BOUSCAT_hce64e.jpg',
                    hostId: '',
                  },
                ],
              },
              tags: {
                create: [
                  {
                    tagId: '641dacf89b0c0cb9c0fcb737',
                  },
                ],
              },
            },
          ],
        },
      },
    },
  },
];

async function main() {
  await clearDatabase();
  console.log(`Start seeding...`);
  console.log(`Deleting...`);

  for (const u of userData) {
    await prisma.user.create({
      data: u,
    });
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
