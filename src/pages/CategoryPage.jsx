import { useEffect, useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CategoryGrid } from "../components/category/CategoryGrid";
import { ProductGrid } from "../components/product/ProductGrid";
import { SearchBar } from "../components/ui/SearchBar";
import { FilterBar } from "../components/ui/FilterBar";
import { products } from "../data/products";
import { categories } from "../data/categories";

export const CategoryPage = () => {
  const [searchParams] = useSearchParams();
  const audienceFromUrl = searchParams.get("audience") || "All";
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAudience, setSelectedAudience] = useState(audienceFromUrl);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSort, setSelectedSort] = useState("name");
  const isOutletView = searchParams.get("view") === "outlet";

  const audienceHighlights = [
    {
      value: "Women",
      title: "Women",
      description: "Studio essentials, warm-up layers, and refined silhouettes designed for movement and confidence.",
    },
    {
      value: "Men",
      title: "Men",
      description: "Clean rehearsal pieces and practical layers with a sharp fit and flexible comfort.",
    },
    {
      value: "Kids",
      title: "Kids",
      description: "Comfortable beginner-friendly pieces for younger dancers, from class basics to warm-up favorites.",
    },
  ];

  const categoryOptions = useMemo(() => ["All", ...categories.map((category) => category.value)], []);
  const audienceHeading =
    selectedAudience === "All"
      ? "Products"
      : selectedAudience === "Kids"
      ? "Kids Picks"
      : `${selectedAudience}' Picks`;
  const showAudienceHighlights = !isOutletView && selectedAudience === "All";

  useEffect(() => {
    if (isOutletView) {
      setSelectedSort("price-low");
    }
  }, [isOutletView]);

  useEffect(() => {
    setSelectedAudience(audienceFromUrl);
  }, [audienceFromUrl]);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    if (isOutletView) {
      filtered = filtered.filter((p) => p.isOutlet);
    }

    if (selectedAudience !== "All") {
      filtered = filtered.filter((p) => p.audience === selectedAudience);
    }

    // Filter by search term
    if (searchTerm.trim()) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    // Sort
    const sorted = [...filtered];
    switch (selectedSort) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case "name":
      default:
        sorted.sort((a, b) => a.name.localeCompare(b.name));
    }

    return sorted;
  }, [isOutletView, searchTerm, selectedAudience, selectedCategory, selectedSort]);

  return (
    <div className="container" style={{ paddingTop: "2.5rem", paddingBottom: "3rem" }}>
      <div
        style={{
          background: "linear-gradient(180deg, rgba(255,248,246,0.92) 0%, rgba(245,232,227,0.9) 100%)",
          border: "1px solid var(--border)",
          borderRadius: "24px",
          padding: "2rem",
          marginBottom: "2rem",
          boxShadow: "var(--shadow)",
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: "0.75rem", color: "var(--text)", fontFamily: "Georgia, serif", fontSize: "clamp(2.1rem, 4vw, 3.2rem)" }}>
        {isOutletView ? "Outlet" : selectedAudience === "All" ? "Shop" : selectedAudience}
        </h1>
        <p style={{ margin: 0, color: "var(--muted)", maxWidth: "720px" }}>
          {isOutletView
            ? "Explore reduced-price favorites and limited outlet picks in the same soft, refined Move palette."
            : selectedAudience === "All"
              ? "Browse the full Move assortment for women, men, and kids, from studio essentials to warm-up layers and curated dancewear staples."
              : `Browse curated ${selectedAudience.toLowerCase()} dancewear pieces, from studio essentials to warm-up layers and rehearsal-ready favorites.`}
        </p>
      </div>

      {showAudienceHighlights && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginBottom: "2rem",
          }}
        >
          {audienceHighlights.map((audience) => {
            const isSelected = selectedAudience === audience.value;
            return (
              <button
                key={audience.value}
                onClick={() => setSelectedAudience(audience.value)}
                style={{
                  textAlign: "left",
                  padding: "1.5rem",
                  borderRadius: "22px",
                  border: isSelected ? "1px solid rgba(137, 75, 76, 0.32)" : "1px solid var(--border)",
                  background: isSelected
                    ? "linear-gradient(180deg, rgba(214,177,175,0.35) 0%, rgba(255,248,246,0.85) 100%)"
                    : "rgba(255,248,246,0.72)",
                  color: "var(--text)",
                  cursor: "pointer",
                  boxShadow: isSelected ? "0 16px 30px rgba(137, 75, 76, 0.08)" : "0 10px 24px rgba(137, 75, 76, 0.05)",
                }}
              >
                <p style={{ margin: "0 0 0.6rem 0", color: "var(--brand)", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", fontSize: "0.72rem" }}>
                  Shop By Audience
                </p>
                <h3 style={{ margin: "0 0 0.5rem 0", fontFamily: "Georgia, serif", fontSize: "1.5rem" }}>{audience.title}</h3>
                <p style={{ margin: 0, color: "var(--muted)", lineHeight: 1.7 }}>{audience.description}</p>
              </button>
            );
          })}
        </div>
      )}
      
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <FilterBar
        selectedAudience={selectedAudience}
        selectedCategory={selectedCategory}
        selectedSort={selectedSort}
        onAudienceChange={setSelectedAudience}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSelectedSort}
        categoryOptions={categoryOptions}
      />

      {!isOutletView && (
        <>
          <h2 className="section-title">Featured Categories</h2>
          <CategoryGrid categories={categories} />
        </>
      )}

      <h2 className="section-title">
        {isOutletView ? "Outlet Picks" : audienceHeading} ({filteredAndSortedProducts.length})
      </h2>
      
      {filteredAndSortedProducts.length === 0 ? (
        <p style={{ textAlign: "center", color: "var(--muted)", padding: "2rem" }}>
          {isOutletView ? "No outlet products found right now." : "No products found matching your search."}
        </p>
      ) : (
        <ProductGrid products={filteredAndSortedProducts} />
      )}
    </div>
  );
};
