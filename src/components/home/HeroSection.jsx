import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(201,135,135,0.22),_transparent_38%),linear-gradient(180deg,#f8ece7_0%,#f7e4dd_45%,#fff8f5_100%)]">
      <div className="absolute inset-0">
        <div className="absolute left-[-120px] top-12 h-72 w-72 rounded-full bg-[#f0cfc7]/50 blur-3xl" />
        <div className="absolute bottom-0 right-[-80px] h-80 w-80 rounded-full bg-[#e8c2bc]/55 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[640px] max-w-7xl items-center gap-14 px-6 py-14 md:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div
          className="max-w-2xl"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(18px)",
            transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
          }}
        >
          <span className="mb-6 inline-flex rounded-full border border-[#dec1ba] bg-[#fff5f1]/90 px-4 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#8c5e60] shadow-[0_8px_22px_rgba(137,75,76,0.08)]">
            Dancewear & Dance Shoes
          </span>

          <h1 className="max-w-xl font-serif text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-[#5a2d2f] md:text-7xl">
            Elegant pieces made to move with every rehearsal.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#7a5f60] md:text-[1.15rem]">
            Discover refined dancewear for women, men, and kids with soft studio layers, graceful silhouettes,
            and shoes designed for comfort from class to performance.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/category"
              className="rounded-full bg-[#6b3639] px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(107,54,57,0.24)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#5a2d2f]"
            >
              Shop The Edit
            </Link>
            <Link
              to="/collections"
              className="rounded-full border border-[#c79b98] bg-[#fff7f3]/85 px-8 py-4 text-center text-sm font-semibold uppercase tracking-[0.16em] text-[#7a4e50] shadow-[0_10px_26px_rgba(137,75,76,0.08)] transition-all duration-200 hover:bg-[#f8e7e1] hover:text-[#5a2d2f]"
            >
              View Collections
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.6rem] border border-[#ead3cd] bg-[#fff8f5]/88 px-5 py-5 shadow-[0_18px_40px_rgba(137,75,76,0.08)] backdrop-blur-md">
              <p className="font-serif text-2xl text-[#6b3639]">Women</p>
              <p className="mt-1 text-sm leading-6 text-[#85696a]">Studio essentials with a polished, feminine line.</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#ead3cd] bg-[#fff8f5]/88 px-5 py-5 shadow-[0_18px_40px_rgba(137,75,76,0.08)] backdrop-blur-md">
              <p className="font-serif text-2xl text-[#6b3639]">Men</p>
              <p className="mt-1 text-sm leading-6 text-[#85696a]">Clean rehearsal layers with comfort and freedom built in.</p>
            </div>
            <div className="rounded-[1.6rem] border border-[#ead3cd] bg-[#fff8f5]/88 px-5 py-5 shadow-[0_18px_40px_rgba(137,75,76,0.08)] backdrop-blur-md">
              <p className="font-serif text-2xl text-[#6b3639]">Kids</p>
              <p className="mt-1 text-sm leading-6 text-[#85696a]">Soft, practical pieces ready for class, practice, and play.</p>
            </div>
          </div>
        </div>

        <div
          className="relative"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.95s ease-out 0.1s, transform 0.95s ease-out 0.1s",
          }}
        >
          <div className="relative mx-auto max-w-[36rem]">
            <div className="absolute -left-6 top-12 hidden h-32 w-32 rounded-full border border-[#edd7d1] bg-[#fff8f6]/70 backdrop-blur-md lg:block" />
            <div className="absolute -right-8 bottom-12 hidden h-40 w-40 rounded-full bg-[#e8beb8]/45 blur-2xl lg:block" />

            <div className="grid grid-cols-[0.68fr_1fr] gap-4">
              <div className="flex flex-col gap-4 pt-12">
                <div className="overflow-hidden rounded-[2rem] border border-[#ebd5cf] bg-[#fff7f4] shadow-[0_20px_45px_rgba(137,75,76,0.11)]">
                  <img
                    src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=700&q=80"
                    alt="Young dancer in soft studio rehearsal wear"
                    className="h-[220px] w-full object-cover"
                  />
                </div>
                <div className="rounded-[2rem] border border-[#ebd5cf] bg-[#fff7f4]/92 p-5 shadow-[0_20px_45px_rgba(137,75,76,0.1)]">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#9d7273]">New Focus</p>
                  <p className="mt-3 font-serif text-2xl leading-8 text-[#5a2d2f]">Soft studio tones, refined fits, elevated comfort.</p>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[2.3rem] border border-[#e5cfc9] bg-[#fff7f4] shadow-[0_24px_60px_rgba(137,75,76,0.14)]">
                <img
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1100&q=80"
                  alt="Ballerina wearing elegant dancewear in a bright studio"
                  className="h-[540px] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#5a2d2f]/72 via-[#5a2d2f]/24 to-transparent px-6 pb-6 pt-20 text-white">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-[#f4ddda]">Studio Edit</p>
                  <p className="mt-3 max-w-xs font-serif text-3xl leading-9">Designed for graceful movement and all-day confidence.</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 left-6 rounded-[1.6rem] border border-[#ead2cb] bg-[#fff8f5]/92 px-5 py-4 shadow-[0_20px_44px_rgba(137,75,76,0.12)] backdrop-blur-md">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-[#9d7273]">Best For</p>
              <p className="mt-2 font-serif text-2xl text-[#5a2d2f]">Class, rehearsal, performance</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
