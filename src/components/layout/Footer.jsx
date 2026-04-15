import { Link } from "react-router-dom";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="mt-20 w-full border-t border-[#8e5f60]/20 bg-gradient-to-b from-[#d6b1af] via-[#cfaaa8] to-[#c59d9b] text-[#5a2d2f] dark:border-[#a67374]/25 dark:from-[#5a3436] dark:via-[#4f2d2f] dark:to-[#452628] dark:text-[#ffe9e9]">
      <div className="px-8 py-14">
        <div className="mx-auto max-w-screen-2xl rounded-[2rem] border border-white/18 bg-white/16 px-8 py-10 shadow-[0px_18px_38px_rgba(108,52,54,0.14)] backdrop-blur-xl dark:border-white/8 dark:bg-white/6">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.28em] text-[#7d484a] dark:text-[#e8c4c4]">
                Join Move Circle
              </p>
              <h3 className="mb-3 font-serif text-3xl font-bold leading-tight text-[#5a2d2f] dark:text-white">
                Join for first access to new drops, outlet edits, and studio bestsellers.
              </h3>
              <p className="text-sm text-[#6c4d4e] dark:text-[#e3caca]">
                Subscribe for curated launches, styling notes, and a welcome offer for your first Move order.
              </p>
            </div>

            <form onSubmit={handleNewsletterSubmit} className="flex w-full max-w-xl flex-col gap-3 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="min-w-0 flex-1 rounded-full border border-white/28 bg-white/70 px-5 py-3 text-sm text-[#5a2d2f] placeholder:text-[#8b6b6c] focus:border-[#6c3436] focus:ring-0 dark:border-white/10 dark:bg-white/8 dark:text-white dark:placeholder:text-[#d8bcbc]"
                required
              />
              <button
                type="submit"
                className="rounded-full bg-[#6c3436] px-6 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-all duration-200 hover:bg-[#57292b] active:scale-95 dark:bg-[#9b5b5d] dark:hover:bg-[#834749]"
              >
                Subscribe
              </button>
            </form>
          </div>

          {subscribed && (
            <p className="mt-4 text-sm font-semibold text-[#6c3436] dark:text-[#f1cfcf]">
              Thanks for subscribing. Your welcome offer is on the way.
            </p>
          )}
        </div>
      </div>

      <div className="px-8 pb-12">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-serif text-2xl font-black tracking-[0.22em] text-[#5a2d2f] dark:text-white">
              MOVE
            </h4>
            <p className="max-w-sm text-sm leading-relaxed text-[#6d4f50] dark:text-[#e2caca]">
              Premium dancewear and dance shoes for women who care about movement, quality, and a refined studio look.
            </p>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#7d484a] dark:text-[#f0d7d7]">
              Shop
            </h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/category" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">All Products</Link></li>
              <li><Link to="/collections" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">Collections</Link></li>
              <li><Link to="/category?view=outlet" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">Outlet</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#7d484a] dark:text-[#f0d7d7]">
              About
            </h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">About Move</Link></li>
              <li><Link to="/faq" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">FAQ</Link></li>
              <li><Link to="/contact" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h5 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#7d484a] dark:text-[#f0d7d7]">
              Legal
            </h5>
            <ul className="space-y-3 text-sm">
              <li><Link to="/privacy" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">Privacy</Link></li>
              <li><Link to="/terms" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">Terms</Link></li>
              <li><Link to="/cookies" className="text-[#6d4f50] transition-colors hover:text-[#5a2d2f] dark:text-[#e2caca] dark:hover:text-white">Cookies</Link></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/14 px-8 py-6 dark:border-white/8">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-[#6d4f50] dark:text-[#e2caca]">
            2025 Move. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/18 px-4 py-2 text-sm font-semibold text-[#5a2d2f] transition-all hover:bg-[#6c3436] hover:text-white dark:bg-white/6 dark:text-[#ffe9e9] dark:hover:bg-[#9b5b5d]"
            >
              Instagram
            </a>
            <a
              href="mailto:support@move.se"
              className="rounded-full bg-white/18 px-4 py-2 text-sm font-semibold text-[#5a2d2f] transition-all hover:bg-[#6c3436] hover:text-white dark:bg-white/6 dark:text-[#ffe9e9] dark:hover:bg-[#9b5b5d]"
            >
              Email
            </a>
            <a
              href="https://www.pinterest.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-white/18 px-4 py-2 text-sm font-semibold text-[#5a2d2f] transition-all hover:bg-[#6c3436] hover:text-white dark:bg-white/6 dark:text-[#ffe9e9] dark:hover:bg-[#9b5b5d]"
            >
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
