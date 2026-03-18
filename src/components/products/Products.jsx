import { productsData } from "../../data/products";
import ProductSection from "../products/ProductsSection";
import "../../styles/products.css";

const Products = () => {
  return (
    <>
      {productsData.map((section, index) => (
        <ProductSection
          key={index}
          title={section.category}
          items={section.items}
        />
      ))}
    </>
  );
};

export default Products;
