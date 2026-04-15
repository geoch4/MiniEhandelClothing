import { HeroSection } from "../components/home/HeroSection";
import { TrustBar } from "../components/home/TrustBar";
import { BentoFeatured } from "../components/home/BentoFeatured";
import { MostLovedSection } from "../components/home/MostLovedSection";
import { FeaturedCollections } from "../components/home/FeaturedCollections";
import { SocialProofSection } from "../components/home/SocialProofSection";
import { PromoSection } from "../components/home/PromoSection";
import { BrandSection } from "../components/home/BrandSection";

export const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <TrustBar />
      <BentoFeatured />
      <MostLovedSection />
      <FeaturedCollections />
      <SocialProofSection />
      <PromoSection />
      <BrandSection />
    </div>
  );
};
