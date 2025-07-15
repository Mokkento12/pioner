import { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "Pioner" }: Props) => (
  <>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        href="https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@300;400;600;700&display=swap"
        rel="stylesheet"
      />
    </Head>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
