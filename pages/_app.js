import { ThemeProvider } from "next-themes";
import Script from "next/script";

import { Navbar, Footer } from "../Components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>
        <Footer />
      </div>
      <Script
        src="https://kit.fontawesome.com/380f1fba7a.js"
        crossorigin="anonymous"
      ></Script>
    </ThemeProvider>
  );
}

export default MyApp;
