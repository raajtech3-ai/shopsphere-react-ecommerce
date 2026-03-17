const CategoryCard = ({ data }) => {
  return (
    <div className="category-card p-3 border rounded">
      <div className="d-flex align-items-center gap-3">
        <img src={data.img} alt="" width="60" />

        <div>
          <h6>{data.title}</h6>

          {data.items.map((item, i) => (
            <p key={i} className="mb-0 small text-muted">
              {item}
            </p>
          ))}
        </div>
      </div>

      <button className="btn btn-light btn-sm mt-2">View all</button>
    </div>
  );
};

export default CategoryCard;
