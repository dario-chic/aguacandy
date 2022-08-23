import Script from "next/script";
import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Script
        src="https://unpkg.com/aos@next/dist/aos.js"
        strategy="lazyOnload"
        onLoad={() => AOS.init()}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
