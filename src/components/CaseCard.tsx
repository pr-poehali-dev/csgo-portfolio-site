import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

interface CaseCardProps {
  name: string;
  price: number;
  image: string;
  items: number;
  rarity: "common" | "rare" | "legendary";
  onOpen: () => void;
}

const CaseCard = ({
  name,
  price,
  image,
  items,
  rarity,
  onOpen,
}: CaseCardProps) => {
  const rarityColors = {
    common: "border-blue-500 bg-blue-500/10",
    rare: "border-purple-500 bg-purple-500/10",
    legendary: "border-gold bg-gold/10",
  };

  return (
    <Card
      className={`p-4 bg-card-bg border-2 ${rarityColors[rarity]} hover:scale-105 transition-all duration-300 case-glow`}
    >
      <div className="aspect-square mb-4 relative overflow-hidden rounded-lg bg-gradient-to-br from-gray-800 to-gray-900">
        <img src={image} alt={name} className="w-full h-full object-cover" />
        <div className="absolute top-2 right-2 bg-black/70 px-2 py-1 rounded text-xs">
          {items} предметов
        </div>
      </div>

      <h3 className="font-semibold text-lg mb-2 text-center">{name}</h3>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-1">
          <Icon name="Coins" size={16} className="text-gold" />
          <span className="font-bold text-gold">${price}</span>
        </div>
        <div
          className={`px-2 py-1 rounded text-xs capitalize ${
            rarity === "legendary"
              ? "bg-gold/20 text-gold"
              : rarity === "rare"
                ? "bg-purple-500/20 text-purple-400"
                : "bg-blue-500/20 text-blue-400"
          }`}
        >
          {rarity}
        </div>
      </div>

      <Button
        onClick={onOpen}
        className="w-full bg-neon-blue hover:bg-neon-blue/80 text-dark-bg font-semibold animate-pulse-glow"
      >
        <Icon name="Unlock" size={16} className="mr-2" />
        Открыть кейс
      </Button>
    </Card>
  );
};

export default CaseCard;
