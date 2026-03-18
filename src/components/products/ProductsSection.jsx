import ProductCard from "../products/ProductCard";

const ProductSection = ({ title, items }) => {
  return (
    <div className="container my-5">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div>
          <h4>{title}</h4>
          <p className="text-muted">Special products in this month.</p>
        </div>

        <a href="#" className="text-decoration-none">
          View All →
        </a>
      </div>

      {/* Grid */}
      <div className="row g-3">
        {items.map((product) => (
          <div className="col-lg-2 col-md-4 col-sm-6" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
