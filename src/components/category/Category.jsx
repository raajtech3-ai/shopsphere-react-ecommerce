import React from "react";
import CategoryCard from "./CategoryCard";
import "../../styles/category.css";

const categoryData = [
  {
    title: "Clothes",
    items: ["Men Wear", "Makeup", " Mango"],
    img: "../src/assets/images/product/explore1.png",
  },
  {
    title: "Beauty",
    items: ["Men Wear", "Makeup", " Mango"],
    img: "../src/assets/images/product/explore2.png",
  },
  {
    title: "Grocery",
    items: ["Men Wear", "Makeup", " Mango"],
    img: "../src/assets/images/product/explore3.png",
  },
  {
    title: "Electronics",
    items: ["Men Wear", "Makeup", " Mango"],
    img: "../src/assets/images/product/explore4.png",
  },
  {
    title: "Jewelry",
    items: ["Men Wear", "Makeup", " Mango"],
    img: "../src/assets/images/product/explore5.png",
  },
  {
    title: "Home Accessories",
    items: ["Men Wear", "Makeup", " Mango"],
    img: "../src/assets/images/product/explore6.png",
  },
  {
    title: "Book & Stationery",
    items: ["Men Wear", "Makeup", " Mango"],
    img: "../src/assets/images/product/explore7.png",
  },
  {
    title: "Toys & Games",
    items: ["Men Wear", "Makeup", " Mango"],
    img: "../src/assets/images/product/explore8.png",
  },
];

const Category = () => {
  return (
    <div className="container mt-5">
      <h4 className="mb-3">Explore</h4>
      <p className="text-muted">
        Choose your necessary products from this feature catogries.
      </p>
      <div className="row">
        {categoryData.map((cat, index) => (
          <div className="col-lg-3 col-md-6 mb-3" key={index}>
            {" "}
            <CategoryCard data={cat} />{" "}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
