import React, { useState } from "react";

const categories = [
  {
    title: "Electronics",
    items: ["Mobiles", "Laptops", "Cameras", "Smart Watch"],
  },
  {
    title: "Fashion",
    items: ["Men Clothing", "Women Clothing", "Shoes", "Watches"],
  },
  {
    title: "Home",
    items: ["Furniture", "Kitchen", "Decor", "Lighting"],
  },
  {
    title: "Beauty",
    items: ["Makeup", "Skincare", "Haircare", "Perfumes"],
  },
];

const CategoryMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="category-container"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button className="category-button">Categories</button>

      {open && (
        <div className="mega-menu">
          {categories.map((category, index) => (
            <div key={index} className="menu-column">
              <h4>{category.title}</h4>

              {category.items.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryMenu;
