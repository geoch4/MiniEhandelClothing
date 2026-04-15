import { Header } from "./Header";
import { Footer } from "./Footer";
import { MobileNav } from "./MobileNav";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="main-content pt-36 md:pt-48">
        {children}
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
};
