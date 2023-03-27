export const authPageFr = {
  firstSection: {
    firstBubbleText:
      "Crée ton compte pour pouvoir demander de l'aide, enregistrer et créer des annonces !",
    secondBubbleText:
      "Rentre ton email pour qu'on fasse un peu plus connaissance !",
    thirdBubbleText:
      "Rentre ton pseudo. Fais toi plaisir tu peux être qui tu veux aujourd'hui !",
    fields: {
      email: {
        label: "Rentre ton email",
        placeholder: "email@mail.com",
        required: "Veuillez saisir votre email",
        validEmail: "Veuillez saisir une adresse mail valide",
      },
      pseudo: {
        label: "Rentre ton pseudo",
        placeholder: "pseudo..",
        required: "Veuillez saisir votre pseudo",
      },
    },
  },
  secondSection: {
    firstBubbleText:
      "Deux pour le prix d'un ! Marque ton mot de passe, puis comfirme-le.",
    fields: {
      password: {
        label: "Rentre ton mot de passe",
        placeholder: "mot de passe..",
        required: "Veuillez saisir votre mot de passe",
        min: "Veuillez saisir au moins 6 caractères",
      },
      confirmPassword: {
        label: "Comfirme ton mot de passe",
        placeholder: "comfirm..",
        required: "Veuillez comfirmez votre mot de passe",
        oneOf: "Les mots de passe ne correspondent pas",
      },
    },
  },
};
