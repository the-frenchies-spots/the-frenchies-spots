export const authPageEn = {
  firstSection: {
    firstBubbleText:
      "Create your account to be able to ask for help, register and create announcements !",
    secondBubbleText:
      "Enter your email so we can get to know each other a little better !",
    thirdBubbleText:
      "Enter your nickname. Treat yourself you can be whoever you want today !",
    fields: {
      email: {
        label: "Enter your email",
        placeholder: "email@mail.com",
        required: "Please enter your email",
        validEmail: "Please enter a valid email address",
      },
      pseudo: {
        label: "Enter your nickname",
        placeholder: "nickname..",
        required: "Please enter your nickname",
      },
    },
  },
  secondSection: {
    firstBubbleText:
      "Two for the price of one ! Write down your password, then confirm it.",
    fields: {
      password: {
        label: "Enter your password",
        placeholder: "password..",
        required: "Please enter your password",
        min: "Please enter at least 6 characters",
      },
      confirmPassword: {
        label: "Confirm your password",
        placeholder: "comfirm..",
        required: "Please confirm your password",
        oneOf: "Passwords do not match",
      },
    },
  },
};
