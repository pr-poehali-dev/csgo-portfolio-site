import { useState } from "react";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [balance] = useState(1250.5);

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-neon-blue rounded-lg flex items-center justify-center">
              <Icon name="Box" size={20} className="text-dark-bg" />
            </div>
            <h1 className="text-xl font-bold text-neon-blue">CSCase</h1>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant="ghost"
              className="text-foreground hover:text-neon-blue"
            >
              Главная
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-neon-blue"
            >
              Кейсы
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-neon-blue"
            >
              Рейтинг
            </Button>
            <Button
              variant="ghost"
              className="text-foreground hover:text-neon-blue"
            >
              Пополнение
            </Button>
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 bg-card px-3 py-2 rounded-lg">
            <Icon name="Coins" size={16} className="text-gold" />
            <span className="font-semibold text-gold">
              ${balance.toFixed(2)}
            </span>
          </div>

          <Button className="bg-neon-blue hover:bg-neon-blue/80 text-dark-bg font-semibold neon-glow">
            <Icon name="Plus" size={16} className="mr-2" />
            Пополнить
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
