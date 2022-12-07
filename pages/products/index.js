import next from "next";
import { useEffect } from "react";
import { useProducts, useProductsDispatch } from "../../utils/products_context";
import Cards from "../Components/Card";
import Link from "next/link";
export async function getServerSideProps() {
  const req = await fetch("https://dummyjson.com/products?limit=9");
  const data = await req.json();

  return {
    props: { productsData: data?.products ?? [] },
  };
}

const productpage = ({ productsData }) => {
  const dispatch = useProductsDispatch();
  const products = useProducts();
  useEffect(() => {
    console.log("!!");
    if (products.length == 0) {
      dispatch({ type: "init", products: productsData });
    }
  }, []);
  return (
  <> 
   <div className="mt-36">
         
  <Cards items={products} isButtonText ={false} /></div>

  </>
 );
};
export default productpage;