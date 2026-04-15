import { useState } from "react";

export const PromoSection = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fbf3f0] to-[#f3e3de] px-8 py-24">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 h-full w-1/2 rounded-l-full bg-[#894b4c]/5 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 h-full w-1/2 rounded-r-full bg-[#894b4c]/5 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl rounded-3xl border border-white/30 bg-white/72 px-12 py-16 shadow-2xl backdrop-blur-2xl md:px-20 md:py-24">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 font-serif text-4xl font-bold leading-tight text-[#5a2d2f] md:text-5xl">
              Join Move <br />Circle
            </h2>
            <p className="text-lg leading-relaxed text-[#74595a]">
              Get early access to special offers, exclusive collections, and invitations to workshops and masterclasses.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="space-y-2">
              <label className="ml-2 block text-xs font-bold uppercase tracking-widest text-[#894b4c]">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full rounded-xl border-2 border-[#e6d3cf] bg-[#fff8f6] px-6 py-4 text-[#5a2d2f] placeholder:text-[#a18a8a] transition-colors focus:border-[#894b4c] focus:ring-0"
                required
              />
            </div>
            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-[#894b4c] to-[#6f3637] py-5 font-bold uppercase tracking-widest text-white transition-all hover:shadow-lg active:scale-95"
            >
              Subscribe
            </button>
            {subscribed && (
              <p className="text-center text-sm font-semibold text-[#7f4345]">
                Thanks for subscribing!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
