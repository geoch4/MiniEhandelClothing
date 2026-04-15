import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { ToastProvider } from "./context/ToastContext";
import { ErrorProvider } from "./context/ErrorContext";
import { ThemeProvider } from "./context/ThemeContext";
import { Layout } from "./components/layout/Layout";
import { Toast } from "./components/ui/Toast";
import { ErrorDisplay } from "./components/ui/ErrorDisplay";
import { HomePage } from "./pages/HomePage";
import { CategoryPage } from "./pages/CategoryPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { CartPage } from "./pages/CartPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderConfirmationPage } from "./pages/OrderConfirmationPage";
import { FAQPage } from "./pages/FAQPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { SiteInfoPage } from "./pages/SiteInfoPage";
import { CollectionsPage } from "./pages/CollectionsPage";
import "./styles/globals.css";

function App() {
  return (
    <ThemeProvider>
      <ErrorProvider>
        <CartProvider>
          <ToastProvider>
            <BrowserRouter>
              <Toast />
              <ErrorDisplay />
              <Layout>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/category" element={<CategoryPage />} />
                  <Route path="/product/:id" element={<ProductDetailsPage />} />
                  <Route path="/cart" element={<CartPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/order/:orderid" element={<OrderConfirmationPage />} />
                  <Route path="/faq" element={<FAQPage />} />
                  <Route path="/collections" element={<CollectionsPage />} />
                  <Route path="/about" element={<SiteInfoPage pageKey="about" />} />
                  <Route path="/contact" element={<SiteInfoPage pageKey="contact" />} />
                  <Route path="/privacy" element={<SiteInfoPage pageKey="privacy" />} />
                  <Route path="/terms" element={<SiteInfoPage pageKey="terms" />} />
                  <Route path="/cookies" element={<SiteInfoPage pageKey="cookies" />} />
                  <Route path="*" element={<NotFoundPage />} />
                </Routes>
              </Layout>
            </BrowserRouter>
          </ToastProvider>
        </CartProvider>
      </ErrorProvider>
    </ThemeProvider>
  );
}

export default App;
