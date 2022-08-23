import Script from "next/script";
import "../styles/index.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
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
