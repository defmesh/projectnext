import Navigation from "../pages/Components/Navigation";
import Footer from "../pages/Components/footer";
import Head from "next/head";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title> Flowers</title>
        <link rel="icon" href={"fq.png"}></link>
      </Head>
      <div className="flex flex-col">
      <Navigation />
     <div className="grow h-full"> {children}</div>

      <Footer />
      </div>
    </>
  );
};

export default Layout;
