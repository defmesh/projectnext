import { createContext, useContext, useReducer } from "react";

const ProductsContext = createContext(null);
const ProductsDispatchContext = createContext(null);

export function ProductsProvider({ children }) {
  const [products, dispatch] = useReducer(productsReducer, initialProducts);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsDispatchContext.Provider value={dispatch}>{children}</ProductsDispatchContext.Provider>
    </ProductsContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductsContext);
}

export function findProduct(id) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  let product = useContext(ProductsContext).find((p) => p.id == id);
  return product;
}

export function useProductsDispatch() {
  return useContext(ProductsDispatchContext);
}

function productsReducer(products, action) {
  switch (action.type) {
    case "init": {
      let newProducts = [...action.products, products];
      newProducts = [...new Set(newProducts)];
      return [...action.products, products];
    }
    case "added": {
      let id = products.length + 1;
      console.log({
        id,
        title: action.product.title,
        description: action.product.description,
        thumbnail: action.product.thumbnail,
      });
      return [
        {
          id,
          title: action.product.title,
          description: action.product.description,
          thumbnail: action.product.thumbnail,
        },
        ...products,
      ];
    }
    case "changed": {
      return products.map((t) => {
        if (t.id === action.product.id) {
          return action.product;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return [...products.filter((t) => t.id != action.id)];
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
const initialProducts = [

];
