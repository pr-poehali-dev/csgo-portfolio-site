import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const BonusSystem = () => {
  const [promoCode, setPromoCode] = useState("");
  const [dailyBonusClaimed, setDailyBonusClaimed] = useState(false);

  const handleClaimDaily = () => {
    setDailyBonusClaimed(true);
  };

  const handlePromoSubmit = () => {
    if (promoCode.trim()) {
      alert(`Промокод "${promoCode}" активирован! +$10 на баланс`);
      setPromoCode("");
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
          Бонусы и Промокоды
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Daily Bonus */}
          <Card className="p-6 bg-card-bg border-neon-blue/50 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-neon-blue/20 rounded-full flex items-center justify-center">
              <Icon name="Calendar" size={32} className="text-neon-blue" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Ежедневный бонус</h3>
            <p className="text-muted-foreground mb-4">
              Получай $5 каждый день за вход в игру
            </p>

            <Button
              onClick={handleClaimDaily}
              disabled={dailyBonusClaimed}
              className="w-full bg-neon-blue hover:bg-neon-blue/80 text-dark-bg font-semibold"
            >
              {dailyBonusClaimed ? (
                <>
                  <Icon name="Check" size={16} className="mr-2" />
                  Получено
                </>
              ) : (
                <>
                  <Icon name="Gift" size={16} className="mr-2" />
                  Получить $5
                </>
              )}
            </Button>
          </Card>

          {/* Promo Code */}
          <Card className="p-6 bg-card-bg border-neon-orange/50 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-neon-orange/20 rounded-full flex items-center justify-center">
              <Icon name="Ticket" size={32} className="text-neon-orange" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Промокод</h3>
            <p className="text-muted-foreground mb-4">
              Введи код и получи бонусы
            </p>

            <div className="space-y-3">
              <Input
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Введи промокод"
                className="bg-background border-border"
              />
              <Button
                onClick={handlePromoSubmit}
                className="w-full bg-neon-orange hover:bg-neon-orange/80 text-dark-bg font-semibold"
              >
                <Icon name="Zap" size={16} className="mr-2" />
                Активировать
              </Button>
            </div>
          </Card>

          {/* Referral Bonus */}
          <Card className="p-6 bg-card-bg border-gold/50 text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-gold/20 rounded-full flex items-center justify-center">
              <Icon name="Users" size={32} className="text-gold" />
            </div>

            <h3 className="text-xl font-semibold mb-2">Приведи друга</h3>
            <p className="text-muted-foreground mb-4">
              Получи $25 за каждого друга
            </p>

            <Button className="w-full bg-gold hover:bg-gold/80 text-dark-bg font-semibold">
              <Icon name="Share" size={16} className="mr-2" />
              Пригласить
            </Button>
          </Card>
        </div>

        {/* Active Promotions */}
        <div className="mt-12 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8 text-neon-blue">
            Активные акции
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-r from-neon-blue/10 to-neon-orange/10 border-neon-blue/30">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-neon-blue/20 rounded-lg flex items-center justify-center">
                  <Icon name="Percent" size={24} className="text-neon-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Скидка 50%</h4>
                  <p className="text-muted-foreground">
                    На все кейсы до конца недели
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-to-r from-gold/10 to-neon-orange/10 border-gold/30">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center">
                  <Icon name="Crown" size={24} className="text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg">VIP статус</h4>
                  <p className="text-muted-foreground">
                    Бесплатно на первый месяц
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSystem;
