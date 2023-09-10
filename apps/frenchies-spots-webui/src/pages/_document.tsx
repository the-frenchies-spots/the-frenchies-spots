import { Html, Head, Main, NextScript } from "next/document";

const style = {
  height: "100%",
  margin: 0,
  padding: 0,
};
export default function Document() {
  return (
    <Html lang="fr" style={style}>
      <Head />

      <body style={style}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
