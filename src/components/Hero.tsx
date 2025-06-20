import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-orange/10 blur-3xl"></div>

      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-neon-blue to-neon-orange bg-clip-text text-transparent">
          Открой свой
          <br />
          легендарный скин
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Тысячи скинов CS:GO ждут тебя в наших кейсах. Получи бонус при
          регистрации и начни выигрывать прямо сейчас!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            size="lg"
            className="bg-neon-blue hover:bg-neon-blue/80 text-dark-bg font-semibold text-lg px-8 py-3 neon-glow"
          >
            <Icon name="Gift" size={20} className="mr-2" />
            Получить бонус
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-neon-orange text-neon-orange hover:bg-neon-orange hover:text-dark-bg font-semibold text-lg px-8 py-3"
          >
            <Icon name="Play" size={20} className="mr-2" />
            Смотреть демо
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-blue mb-2">
              10,000+
            </div>
            <div className="text-muted-foreground">Счастливых игроков</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-orange mb-2">
              $2.5M+
            </div>
            <div className="text-muted-foreground">Выплачено призов</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gold mb-2">24/7</div>
            <div className="text-muted-foreground">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
