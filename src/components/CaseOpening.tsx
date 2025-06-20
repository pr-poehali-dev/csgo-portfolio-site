import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface Item {
  name: string;
  image: string;
  rarity: "common" | "rare" | "legendary";
  value: number;
}

interface CaseOpeningProps {
  caseName: string;
  onClose: () => void;
}

const CaseOpening = ({ caseName, onClose }: CaseOpeningProps) => {
  const [isOpening, setIsOpening] = useState(false);
  const [revealedItem, setRevealedItem] = useState<Item | null>(null);

  const mockItems: Item[] = [
    {
      name: "AK-47 | Redline",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200",
      rarity: "rare",
      value: 25.5,
    },
    {
      name: "AWP | Dragon Lore",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200",
      rarity: "legendary",
      value: 2500.0,
    },
    {
      name: "Glock-18 | Water Elemental",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200",
      rarity: "common",
      value: 5.25,
    },
  ];

  const handleOpenCase = () => {
    setIsOpening(true);

    setTimeout(() => {
      const randomItem =
        mockItems[Math.floor(Math.random() * mockItems.length)];
      setRevealedItem(randomItem);
      setIsOpening(false);
    }, 3000);
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case "legendary":
        return "border-gold bg-gold/10 text-gold";
      case "rare":
        return "border-purple-500 bg-purple-500/10 text-purple-400";
      default:
        return "border-blue-500 bg-blue-500/10 text-blue-400";
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-6 bg-card-bg border-neon-blue/50 text-center">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-neon-blue">{caseName}</h2>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <Icon name="X" size={16} />
          </Button>
        </div>

        {!isOpening && !revealedItem && (
          <div className="space-y-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-blue/20 to-neon-orange/20 rounded-lg flex items-center justify-center case-glow">
              <Icon name="Package" size={64} className="text-neon-blue" />
            </div>

            <Button
              onClick={handleOpenCase}
              className="w-full bg-neon-blue hover:bg-neon-blue/80 text-dark-bg font-semibold text-lg py-3 animate-pulse-glow"
            >
              <Icon name="Unlock" size={20} className="mr-2" />
              Открыть за $5.99
            </Button>
          </div>
        )}

        {isOpening && (
          <div className="space-y-6">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-neon-blue/20 to-neon-orange/20 rounded-lg flex items-center justify-center animate-case-spin case-glow">
              <Icon name="Package" size={64} className="text-neon-blue" />
            </div>

            <div className="text-lg font-semibold text-neon-blue animate-pulse">
              Открываем кейс...
            </div>

            <div className="w-full bg-secondary rounded-full h-2">
              <div
                className="bg-neon-blue h-2 rounded-full animate-pulse"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
        )}

        {revealedItem && (
          <div className="space-y-6">
            <div className="animate-reveal-item">
              <div
                className={`w-32 h-32 mx-auto rounded-lg border-2 ${getRarityColor(revealedItem.rarity)} p-2 gold-glow`}
              >
                <img
                  src={revealedItem.image}
                  alt={revealedItem.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <h3 className="text-xl font-bold mt-4 mb-2">
                {revealedItem.name}
              </h3>
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Coins" size={20} className="text-gold" />
                <span className="text-2xl font-bold text-gold">
                  ${revealedItem.value}
                </span>
              </div>

              <div
                className={`inline-block px-3 py-1 rounded-full text-sm capitalize ${getRarityColor(revealedItem.rarity)}`}
              >
                {revealedItem.rarity}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg"
              >
                <Icon name="ArrowLeftRight" size={16} className="mr-2" />
                Продать
              </Button>
              <Button className="bg-neon-orange hover:bg-neon-orange/80 text-dark-bg">
                <Icon name="Package" size={16} className="mr-2" />
                Еще раз
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default CaseOpening;
