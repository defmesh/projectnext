import "../styles/globals.css";
import Layout from "../Layout/layout";
import { ProductsProvider } from "../utils/products_context";

export default function App({ Component, pageProps }) {
  return (
    <ProductsProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ProductsProvider>
  );
}
