import { ProductGrid } from "../product/ProductGrid";
import { products } from "../../data/products";

export const MostLovedSection = () => {
  const featured = [...products]
    .filter((product) => product.stock > 0)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <section className="px-6 py-16 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#8a5d5f]">
              Most Loved
            </p>
            <h2 className="font-serif text-4xl text-[#5a2d2f] md:text-5xl">
              Bestsellers dancers keep coming back for.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#7b6061]">
            Our strongest-performing pieces combine soft structure, flexible comfort, and a polished studio look.
          </p>
        </div>

        <ProductGrid products={featured} />
      </div>
    </section>
  );
};
