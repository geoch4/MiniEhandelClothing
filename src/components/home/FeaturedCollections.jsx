import { ProductGrid } from "../product/ProductGrid";

export const FeaturedCollections = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Dance Performance Top",
      price: 199,
      image: "/media/product-women.svg",
      description: "Breathable dance top with a sleek fit and supportive details. Perfect for rehearsals and performances."
    },
    {
      id: 2,
      name: "High-Waist Dance Leggings",
      price: 449,
      image: "/media/product-women.svg",
      description: "High-waist dance leggings with gentle compression and flexible stretch. Perfect for everything from contemporary to jazz."
    },
    {
      id: 3,
      name: "Supportive Dance Bra",
      price: 299,
      image: "/media/product-women.svg",
      description: "Supportive dance bra in breathable fabric. Ideal for intense choreography and long studio sessions."
    },
    {
      id: 4,
      name: "Women's Dance Shorts",
      price: 249,
      image: "/media/product-women.svg",
      description: "Lightweight dance shorts with a comfortable waistband and full freedom of movement."
    }
  ];

  return (
    <section className="featured-collections">
      <div className="container">
        <h2 className="section-title">Featured Collections</h2>
        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};
