import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { findProduct, useProductsDispatch } from "../utils/products_context";

const ProductForm = () => {
  const router = useRouter();
  const { isEdit, id } = router.query;
  const dispatch = useProductsDispatch();
  const [formFields, setFormFields] = useState(isEdit ? findProduct(id) ?? {} : {});

  const handleInput = ({ target }) => {
    setFormFields({ ...formFields, [target.name]: target.value });
  };

  const addProduct = () => {
    dispatch({ type: isEdit ? "changed" : "added", product: formFields });
    router.push("/products");
  };

  return (
<div className="  max-w-screen-md h-full mb-40   py-44 mx-auto rounded-lg  md:px-12 lg:px-16 xl:px-38 mt-10">


      <label htmlFor="title">Title</label>
      <br />
      <input value={formFields.title} onChange={handleInput} name="title" className="p-2 border-2 border-gray-300 rounded-sm w-1/2" id="title" placeholder="Title" />
      <br />
      <label htmlFor="desc">Description</label>
      <br />
      <textarea
        value={formFields.description}
        onChange={handleInput}
        name="description"
        className="p-2 border-2 border-gray-300 rounded-sm resize-none h-20 w-1/2"
        id="desc"
        placeholder="Description"
      ></textarea>
      <br />
      <label htmlFor="thumbnail">thumbnail</label>
      <br />
      <input value={formFields.thumbnail} onChange={handleInput} name="thumbnail" className="p-2 border-2 border-gray-300 rounded-sm w-1/2" id="title" placeholder="Thumbnail URL" />
      <br />
      <br />
      <button onClick={addProduct} className="button bg-[#a7b294]  hover:bg-[#6c7758] px-6 py-1 text-white font-bold">
        {isEdit ? "UPDATE" : "ADD"}
      </button>
    </div>
  );
};

export default ProductForm;
