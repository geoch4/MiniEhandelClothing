import { Link } from "react-router-dom";
import { products } from "../../data/products";

export const BentoFeatured = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="mx-auto max-w-screen-2xl px-8 py-24">
      <h2 className="mb-16 text-center font-serif text-4xl font-bold text-[#5a2d2f] md:text-5xl">
        Featured Collections
      </h2>

      <div className="grid h-auto grid-cols-1 gap-6 md:h-[700px] md:grid-cols-4 md:grid-rows-2">
        <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#ead7d1] md:col-span-2 md:row-span-2">
          <Link to={`/product/${featuredProducts[0]?.id}`} className="block h-full w-full">
            <img
              src={featuredProducts[0]?.image}
              alt={featuredProducts[0]?.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[#5a2d2f]/72 via-transparent to-transparent p-8 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="text-white">
                <h3 className="mb-2 font-serif text-3xl font-bold">{featuredProducts[0]?.name}</h3>
                <p className="mb-4 text-white/80">{featuredProducts[0]?.price} kr</p>
                <button className="border-b border-white pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#f4d7d7]">
                  Product Details
                </button>
              </div>
            </div>
          </Link>
        </div>

        <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#f3e5e0] md:col-span-1">
          <Link to={`/product/${featuredProducts[1]?.id}`} className="block h-full w-full">
            <img
              src={featuredProducts[1]?.image}
              alt={featuredProducts[1]?.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#894b4c]/18 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
              <span className="px-4 text-center text-lg font-bold tracking-widest text-white">{featuredProducts[1]?.name}</span>
            </div>
          </Link>
        </div>

        <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#f3e5e0] md:col-span-1">
          <Link to={`/product/${featuredProducts[2]?.id}`} className="block h-full w-full">
            <img
              src={featuredProducts[2]?.image}
              alt={featuredProducts[2]?.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-[#894b4c]/18 opacity-0 transition-opacity group-hover:opacity-100 backdrop-blur-sm">
              <span className="px-4 text-center text-lg font-bold tracking-widest text-white">{featuredProducts[2]?.name}</span>
            </div>
          </Link>
        </div>

        <div className="group relative cursor-pointer overflow-hidden rounded-2xl bg-[#f3e5e0] md:col-span-2">
          <Link to={`/product/${featuredProducts[3]?.id}`} className="block h-full w-full">
            <img
              src={featuredProducts[3]?.image}
              alt={featuredProducts[3]?.name}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex items-center bg-gradient-to-r from-[#5a2d2f]/72 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
              <div className="ml-8 text-white">
                <h3 className="mb-2 font-serif text-3xl font-bold">{featuredProducts[3]?.name}</h3>
                <p className="mb-4 text-white/80">{featuredProducts[3]?.price} kr</p>
                <button className="border-b border-white pb-1 text-sm font-bold uppercase tracking-widest transition-colors hover:text-[#f4d7d7]">
                  Shop Now
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
