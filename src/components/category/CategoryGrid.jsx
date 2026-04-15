import { CategoryCard } from "./CategoryCard";

export const CategoryGrid = ({ categories }) => {
  return (
    <div className="category-grid">
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};
