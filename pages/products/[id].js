import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { findProduct, useProductsDispatch } from "../../utils/products_context";

export default function SingleProducts() {
  const router = useRouter();
  const { id } = router.query;
  const product = findProduct(id);
  const dispatch = useProductsDispatch();

  const deleteProduct = () => {
    dispatch({ type: "deleted", id });
    router.push("/products");
  };
  return (
    <div className="container font-mono text-xl mt-60 px-4  mb-60">
      <Link href="/products" className="hover:text-[#e4d895] ">
        Back</Link>
      {product ? (
        <>
          <Image className="object-center w-1/4 h-full" src={product?.thumbnail} alt="/" width="215" height="217" />
          <h2 className="text-3xl font-bold">{product?.title}</h2>
          <p className="my-4">{product?.description}</p>

          <Link href={"/add-product?isEdit=1&id=" + id}>
          <button type="button" className="rounded-full  font-mono hover:bg-[#e4d895] - flex items-center text-white justify-center  p-3 px-7 font-semibold tracking-wide rounded-m bg-[#a7b294]">
        EDIT
           </button>
          </Link>
          <br />
        
           <button onClick={deleteProduct}  type="button" className="rounded-full font-mono hover:bg-[#e4d895]  flex items-center px-4  text-white justify-center  p-3 font-semibold tracking-wide rounded-m bg-[#a7b294]">
           DELETE
           </button>
        </>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}

// export async function getStaticPaths() {
//   const req = await fetch("https://dummyjson.com/products");
//   const products = await req.json();
//   const paths = products.map((product) => {
//     return {
//       params: { id: product.id },
//     };
//   });
//   return {
//     paths,
//   };
// }
// export async function getStaticProps(context) {
//   const id = context.params.id;
//   const req = await fetch("https://dummyjson.com/products/" + id);
//   const product = await req.json();
//   return {
//     props: { product },
//   };
// }
