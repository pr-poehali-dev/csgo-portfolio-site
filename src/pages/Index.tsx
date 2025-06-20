import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PopularCases from "@/components/PopularCases";
import BonusSystem from "@/components/BonusSystem";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg via-dark-bg to-card-bg">
      <Header />
      <Hero />
      <PopularCases />
      <BonusSystem />
      <Footer />
    </div>
  );
};

export default Index;
