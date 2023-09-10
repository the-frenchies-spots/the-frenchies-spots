import localFont from "next/font/local";

const MontserratBold = localFont({
  src: "./fonts/Montserrat/static/Montserrat-Bold.ttf",
});

const MontserratMedium = localFont({
  src: "./fonts/Montserrat/static/Montserrat-Medium.ttf",
});

const MontserratRegular = localFont({
  src: "./fonts/Montserrat/static/Montserrat-Regular.ttf",
});

export const fonts = {
  "Montserrat-Bold": MontserratBold,
  "Montserrat-Medium": MontserratMedium,
  "Montserrat-Regular": MontserratRegular,
};
