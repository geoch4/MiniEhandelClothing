export const TrustBar = () => {
  const items = [
    {
      title: "Free shipping",
      copy: "On orders over 500 SEK",
    },
    {
      title: "Easy returns",
      copy: "Simple 14-day return flow",
    },
    {
      title: "Secure checkout",
      copy: "Protected payment process",
    },
    {
      title: "Loved by dancers",
      copy: "Studio-ready pieces with 4.7 avg rating",
    },
  ];

  return (
    <section className="px-6 py-6 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-4 rounded-[2rem] border border-[#e4c8c2] bg-[#fff8f5]/88 p-4 shadow-[0_16px_36px_rgba(137,75,76,0.08)] md:grid-cols-4 md:p-6">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-[1.4rem] border border-[#eed8d2] bg-white/60 px-5 py-5 text-center"
          >
            <p className="font-serif text-2xl text-[#5a2d2f]">{item.title}</p>
            <p className="mt-1 text-sm text-[#86696a]">{item.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
