import { Link } from "react-router-dom";
import { productReviews } from "../../data/productReviews";
import { products } from "../../data/products";

export const SocialProofSection = () => {
  const testimonials = Object.entries(productReviews)
    .flatMap(([productId, reviews]) =>
      reviews.map((review) => ({
        ...review,
        product: products.find((item) => item.id === Number(productId)),
      }))
    )
    .filter((review) => review.product)
    .slice(0, 3);

  return (
    <section className="px-6 py-16 md:px-8">
      <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-[#e6cdc7] bg-[linear-gradient(180deg,rgba(255,248,246,0.95),rgba(243,227,222,0.92))] px-6 py-10 shadow-[0_18px_42px_rgba(137,75,76,0.08)] md:px-10 md:py-12">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#8a5d5f]">
              Social Proof
            </p>
            <h2 className="font-serif text-4xl text-[#5a2d2f] md:text-5xl">
              Loved in class, rehearsal, and performance prep.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#7b6061]">
            Real customer voices help new visitors trust the fit, feel, and everyday wearability of the collection.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((review) => (
            <Link
              key={`${review.product.id}-${review.id}`}
              to={`/product/${review.product.id}`}
              className="rounded-[1.8rem] border border-[#ebd5cf] bg-[#fff9f7]/90 p-6 shadow-[0_16px_34px_rgba(137,75,76,0.06)] transition-transform duration-200 hover:-translate-y-1"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-[#9a7172]">
                {"★".repeat(review.rating)}
              </p>
              <h3 className="mt-4 font-serif text-2xl text-[#5a2d2f]">{review.title}</h3>
              <p className="mt-4 text-base leading-7 text-[#7b6061]">"{review.content}"</p>
              <div className="mt-6 border-t border-[#efdfdb] pt-4 text-sm text-[#8b6d6e]">
                <p className="font-semibold text-[#6c4345]">{review.author}</p>
                <p className="mt-1">{review.product.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
