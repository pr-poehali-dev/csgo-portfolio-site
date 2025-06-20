import { useState } from "react";
import CaseCard from "./CaseCard";
import CaseOpening from "./CaseOpening";

const PopularCases = () => {
  const [selectedCase, setSelectedCase] = useState<string | null>(null);

  const cases = [
    {
      name: "Chroma Case",
      price: 5.99,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      items: 15,
      rarity: "common" as const,
    },
    {
      name: "Operation Bravo",
      price: 12.5,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=300&fit=crop",
      items: 12,
      rarity: "rare" as const,
    },
    {
      name: "Dragon Lore Collection",
      price: 25.0,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      items: 8,
      rarity: "legendary" as const,
    },
    {
      name: "Spectrum Case",
      price: 8.99,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=300&fit=crop",
      items: 17,
      rarity: "common" as const,
    },
    {
      name: "Glove Case",
      price: 18.75,
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop",
      items: 10,
      rarity: "rare" as const,
    },
    {
      name: "Knife Collection",
      price: 50.0,
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=300&h=300&fit=crop",
      items: 6,
      rarity: "legendary" as const,
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
          Популярные кейсы
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cases.map((caseItem, index) => (
            <CaseCard
              key={index}
              {...caseItem}
              onOpen={() => setSelectedCase(caseItem.name)}
            />
          ))}
        </div>
      </div>

      {selectedCase && (
        <CaseOpening
          caseName={selectedCase}
          onClose={() => setSelectedCase(null)}
        />
      )}
    </section>
  );
};

export default PopularCases;
