import "../styles/index.scss";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Head>
        <title>Aguacandy</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
