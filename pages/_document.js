import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <link rel="icon" href="logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#e15d8d" />
        <meta
          name="description"
          content="Dulcería en Higuerote con la mejor calidad y los mejores precios!"
        />
        <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />{" "}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&family=Open+Sans&family=Raleway:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        onLoad={() => AOS.init()}
      ></Script> */}

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
