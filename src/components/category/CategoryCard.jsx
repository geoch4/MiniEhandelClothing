export const CategoryCard = ({ category }) => {
  return (
    <div 
      className="category-card"
      style={{
        backgroundImage: `url('${category.image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="category-card-overlay">
        <h3>{category.name}</h3>
      </div>
    </div>
  );
};
