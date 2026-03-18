import { FaHeart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="card p-3 position-relative h-100">
      {/* Discount Badge */}
      <span className="badge bg-warning text-dark position-absolute top-0 start-0 m-2">
        {product.discount}%
      </span>

      {/* Wishlist */}
      <FaHeart className="position-absolute top-0 end-0 m-2" />

      {/* Image */}
      <img src={product.image} alt={product.name} className="img-fluid mb-2" />

      {/* Title */}
      <h6>{product.name}</h6>

      {/* Rating */}
      <p className="text-warning mb-1">⭐⭐⭐⭐⭐</p>

      {/* Price */}
      <p className="fw-bold">₹{product.price}</p>

      {/* Buttons */}
      <div className="d-flex gap-2">
        <button className="btn btn-outline-dark w-50">Cart</button>
        <button className="btn btn-outline-dark w-50">Buy</button>
      </div>
    </div>
  );
};

export default ProductCard;
