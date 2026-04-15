import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export const MobileNav = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <nav className="fixed bottom-0 left-0 z-50 flex w-full items-center justify-around rounded-t-2xl border-t border-[#d7c1bc] bg-[#fff7f4]/94 px-4 pb-6 pt-3 shadow-[0px_-8px_24px_rgba(137,75,76,0.08)] backdrop-blur-xl md:hidden">
      <Link to="/" className="flex flex-col items-center justify-center rounded-xl bg-[#894b4c] px-3 py-2 text-white transition-all active:scale-90">
        <span className="text-xl">🏠</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">Home</span>
      </Link>

      <Link to="/category?audience=Women" className="flex flex-col items-center justify-center rounded-lg px-3 py-2 text-[#7d6061] transition-all hover:bg-[#f0dfda] active:scale-90">
        <span className="text-xl">🩰</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">Women</span>
      </Link>

      <Link to="/category?audience=Men" className="flex flex-col items-center justify-center rounded-lg px-3 py-2 text-[#7d6061] transition-all hover:bg-[#f0dfda] active:scale-90">
        <span className="text-xl">🕺</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">Men</span>
      </Link>

      <Link to="/category?audience=Kids" className="flex flex-col items-center justify-center rounded-lg px-3 py-2 text-[#7d6061] transition-all hover:bg-[#f0dfda] active:scale-90">
        <span className="text-xl">✨</span>
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">Kids</span>
      </Link>

      <Link to="/cart" className="relative flex flex-col items-center justify-center rounded-lg px-3 py-2 text-[#7d6061] transition-all hover:bg-[#f0dfda] active:scale-90">
        <span className="text-xl">🛒</span>
        {getTotalItems() > 0 && (
          <span className="absolute -top-2 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#894b4c] text-[10px] font-bold text-white">
            {getTotalItems()}
          </span>
        )}
        <span className="mt-1 text-[10px] font-bold uppercase tracking-widest">Cart</span>
      </Link>
    </nav>
  );
};
