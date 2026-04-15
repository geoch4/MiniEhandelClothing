import { useContext, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ThemeContext } from "../../context/ThemeContext";

const Icon = ({ children, className = "h-5 w-5" }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

const utilityIconClass =
  "rounded-full p-2 text-[#6f4c4e] transition-all duration-200 hover:bg-[#f6dcd6] hover:text-[#4a2022]";

const mainLinkBase =
  "rounded-full px-4 py-2.5 font-sans text-[0.96rem] font-semibold tracking-[0.08em] transition-all duration-200";

const activePillClass =
  "bg-[#6b3639] text-white shadow-[0_12px_28px_rgba(107,54,57,0.24)] ring-1 ring-[#fff4f1]/70";

const megaMenus = {
  Women: {
    columns: [
      {
        title: "Dancewear",
        links: ["Leotards", "Dresses", "Skirts", "Tights", "Tops & Shorts", "Warm Up"],
      },
      {
        title: "Dance Shoes",
        links: ["Ballet Flats", "Pointe Shoes", "Jazz Shoes", "Studio Trainers"],
      },
      {
        title: "Accessories",
        links: ["Bags", "Hair Essentials", "Warm-Up Socks", "Performance Extras"],
      },
      {
        title: "Featured",
        links: ["New In", "Soft Studio Layers", "Premium Essentials", "Outlet Picks"],
      },
    ],
    image:
      "/media/menu-women.svg",
    caption: "Women's Studio Edit",
  },
  Men: {
    columns: [
      {
        title: "Studio Wear",
        links: ["Training Tees", "Warm-Up Pants", "Layering Jackets", "Shorts"],
      },
      {
        title: "Essentials",
        links: ["Stretch Basics", "Rehearsal Layers", "Movement Fits", "Outlet"],
      },
      {
        title: "Accessories",
        links: ["Bags", "Water Bottles", "Socks", "Travel Cases"],
      },
      {
        title: "Featured",
        links: ["Men's New In", "Rehearsal Edit", "Warm-Up Selection", "Best Sellers"],
      },
    ],
    image:
      "/media/menu-men.svg",
    caption: "Men's Rehearsal Layers",
  },
  Kids: {
    columns: [
      {
        title: "Kids Dancewear",
        links: ["Wrap Tops", "Practice Leggings", "Warm-Up Hoodies", "Class Basics"],
      },
      {
        title: "Shoes",
        links: ["Beginner Ballet", "Soft Practice Shoes", "Stretch Slippers", "Mini Jazz"],
      },
      {
        title: "For Class",
        links: ["Bags", "Hair Kits", "Water Bottles", "Dance Accessories"],
      },
      {
        title: "Featured",
        links: ["Kids New In", "Starter Sets", "Comfort Favorites", "Outlet"],
      },
    ],
    image:
      "/media/menu-kids.svg",
    caption: "Kids Class Favorites",
  },
};

export const Header = () => {
  const { getTotalItems } = useContext(CartContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState(null);

  const activeAudience = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return params.get("audience");
  }, [location.search]);

  const isHomeActive = location.pathname === "/";
  const isCollectionsActive = location.pathname === "/collections";
  const isOutletActive = location.pathname === "/category" && location.search.includes("view=outlet");
  const isFaqActive = location.pathname === "/faq";

  const utilityTextLink = "transition-colors duration-200 hover:text-[#5a2d2f]";

  const audienceLinkClass = (name) =>
    [
      "rounded-full px-5 py-2.5 font-serif text-[1.1rem] tracking-[0.03em] transition-all duration-200",
      activeAudience === name
        ? activePillClass
        : openMenu === name
          ? "bg-[#f0d5cf] text-[#5a2d2f] shadow-[inset_0_0_0_1px_rgba(107,54,57,0.08)]"
          : "text-[#7f6667] hover:bg-[#f3d8d2] hover:text-[#5a2d2f] hover:shadow-[inset_0_0_0_1px_rgba(107,54,57,0.08)]",
    ].join(" ");

  const mainLinkClass = (isActive, isOutlet = false) =>
    [
      mainLinkBase,
      isActive
        ? activePillClass
        : isOutlet
          ? "bg-[#eed0ca] text-[#7a4748] shadow-[inset_0_0_0_1px_rgba(122,71,72,0.1)] hover:bg-[#e7c1ba] hover:text-[#5a2d2f]"
          : "text-[#7f6667] hover:bg-[#f3d8d2] hover:text-[#5a2d2f] hover:shadow-[inset_0_0_0_1px_rgba(107,54,57,0.08)]",
    ].join(" ");

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[#d2aca8] bg-[#f3d2cc]/98 backdrop-blur-xl">
      <div className="border-b border-[#e6c3bd] bg-[#efcbc4] px-5 py-3 md:px-8">
        <div className="mx-auto grid max-w-screen-2xl grid-cols-[1fr_auto_1fr] items-center gap-4">
          <div className="hidden items-center gap-4 text-[0.92rem] text-[#7f6667] md:flex">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18" />
                <path d="M12 3a14.5 14.5 0 0 1 0 18" />
                <path d="M12 3a14.5 14.5 0 0 0 0 18" />
              </Icon>
              <span>Shop in:</span>
              <Link to="/contact" className="border-b border-[#b79395] pb-0.5 text-[#5a2d2f] transition-colors duration-200 hover:text-[#4a2022]">
                The rest of the world
              </Link>
            </div>
            <Link to="/about" className={utilityTextLink} title="About our brand" aria-label="About our brand">
              EN
            </Link>
            <Link to="/contact" className={utilityTextLink} title="Store locations" aria-label="Store locations">
              <Icon className="h-4 w-4">
                <path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11Z" />
                <circle cx="12" cy="10" r="2.2" />
              </Icon>
            </Link>
            <Link to="/contact" className={utilityTextLink} title="Customer care" aria-label="Customer care">
              <Icon className="h-4 w-4">
                <path d="M4.5 15.5v-3a7.5 7.5 0 1 1 15 0v3" />
                <path d="M6.5 15.5h-1a1.5 1.5 0 0 0 0 3h1" />
                <path d="M17.5 15.5h1a1.5 1.5 0 1 1 0 3h-1" />
                <path d="M12 19v1a2 2 0 0 1-2 2h-1" />
              </Icon>
            </Link>
          </div>

          <div className="flex items-center justify-center">
            <Link to="/" className="flex flex-col items-center leading-none">
              <span className="font-serif text-[2.5rem] font-light tracking-[0.08em] text-[#4d2526] md:text-[3.1rem]">
                MOVE
              </span>
              <span className="mt-1 font-sans text-[0.62rem] font-semibold uppercase tracking-[0.42em] text-[#ad8d8e]">
                Dancewear
              </span>
            </Link>
          </div>

          <div className="ml-auto flex items-center justify-end gap-1 text-[#6f4e50]">
            <Link to="/category" className={utilityIconClass} title="Search" aria-label="Search">
              <Icon>
                <circle cx="11" cy="11" r="6.5" />
                <path d="m16 16 4 4" />
              </Icon>
            </Link>
            <Link to="/contact" className={utilityIconClass} title="Newsletter" aria-label="Newsletter">
              <Icon>
                <path d="M4 6h16v12H4z" />
                <path d="m4 8 8 6 8-6" />
              </Icon>
            </Link>
            <button
              onClick={toggleTheme}
              className={utilityIconClass}
              title={theme === "dark" ? "Light mode" : "Warm mode"}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch theme"}
            >
              <Icon>
                {theme === "dark" ? (
                  <>
                    <circle cx="12" cy="12" r="4.5" />
                    <path d="M12 2.5v2.2M12 19.3v2.2M21.5 12h-2.2M4.7 12H2.5M18.7 5.3l-1.5 1.5M6.8 17.2l-1.5 1.5M18.7 18.7l-1.5-1.5M6.8 6.8 5.3 5.3" />
                  </>
                ) : (
                  <path d="M20 15.2A7.8 7.8 0 1 1 8.8 4 6.4 6.4 0 0 0 20 15.2Z" />
                )}
              </Icon>
            </button>
            <Link to="/checkout" className={utilityIconClass} title="Account" aria-label="Account">
              <Icon>
                <circle cx="12" cy="8" r="3.5" />
                <path d="M5 19a7 7 0 0 1 14 0" />
              </Icon>
            </Link>
            <Link to="/cart" className={`${utilityIconClass} relative`} title="Cart" aria-label="Cart">
              <Icon>
                <path d="M7 7h11l-1 11H8L7 7Z" />
                <path d="M9 7a3 3 0 0 1 6 0" />
              </Icon>
              {getTotalItems() > 0 && (
                <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[#5a2d2f] text-[10px] font-semibold text-white">
                  {getTotalItems()}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      <nav className="mx-auto hidden max-w-screen-2xl px-8 md:block">
        <div className="flex items-center justify-center gap-6 border-t border-[#edd3cd] bg-[#f3d2cc] py-3">
          <Link to="/" className={mainLinkClass(isHomeActive)}>
            Home
          </Link>

          {["Women", "Men", "Kids"].map((name) => (
            <div
              key={name}
              className="relative"
              onMouseEnter={() => setOpenMenu(name)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link to={`/category?audience=${name}`} className={audienceLinkClass(name)}>
                {name}
              </Link>
            </div>
          ))}

          <Link to="/collections" className={mainLinkClass(isCollectionsActive)}>
            Collections
          </Link>
          <Link to="/category?view=outlet" className={mainLinkClass(isOutletActive, true)}>
            Outlet
          </Link>
          <Link to="/faq" className={mainLinkClass(isFaqActive)}>
            FAQ
          </Link>
        </div>

        {openMenu && (
          <div
            className="border-t border-[#eee0da] bg-[#fffaf8]"
            onMouseEnter={() => setOpenMenu(openMenu)}
            onMouseLeave={() => setOpenMenu(null)}
          >
            <div className="grid grid-cols-[1.55fr_1.55fr_1fr] gap-8 px-8 py-8">
              <div className="grid grid-cols-2 gap-10">
                {megaMenus[openMenu].columns.slice(0, 2).map((column) => (
                  <div key={column.title}>
                    <h3 className="mb-5 font-sans text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[#5a2d2f]">
                      {column.title}
                    </h3>
                    <ul className="space-y-3.5">
                      {column.links.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/category?audience=${openMenu}`}
                            className="font-sans text-[1rem] text-[#6e5657] transition-colors duration-200 hover:text-[#5a2d2f]"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-10 border-l border-r border-[#ead8d3] px-10">
                {megaMenus[openMenu].columns.slice(2, 4).map((column) => (
                  <div key={column.title}>
                    <h3 className="mb-5 font-sans text-[0.8rem] font-bold uppercase tracking-[0.18em] text-[#5a2d2f]">
                      {column.title}
                    </h3>
                    <ul className="space-y-3.5">
                      {column.links.map((item) => (
                        <li key={item}>
                          <Link
                            to={`/category?audience=${openMenu}`}
                            className="font-sans text-[1rem] text-[#6e5657] transition-colors duration-200 hover:text-[#5a2d2f]"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <Link to={`/category?audience=${openMenu}`} className="flex flex-col gap-4">
                <img
                  src={megaMenus[openMenu].image}
                  alt={megaMenus[openMenu].caption}
                  className="h-[320px] w-full rounded-[0.2rem] object-cover"
                />
                <p className="font-serif text-[1.35rem] text-[#5a2d2f]">{megaMenus[openMenu].caption}</p>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
