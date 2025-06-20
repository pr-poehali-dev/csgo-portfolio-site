import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-neon-blue rounded-lg flex items-center justify-center">
                <Icon name="Box" size={20} className="text-dark-bg" />
              </div>
              <h3 className="text-xl font-bold text-neon-blue">CSCase</h3>
            </div>
            <p className="text-muted-foreground">
              Лучшая платформа для открытия кейсов CS:GO с честными шансами и
              мгновенными выплатами.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Игра</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Кейсы
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Рейтинг
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  История
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Провайдеры
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Поддержка</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Связаться с нами
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Правила
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-neon-blue transition-colors">
                  Ответственная игра
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Социальные сети</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-neon-blue transition-colors"
              >
                <Icon
                  name="MessageCircle"
                  size={20}
                  className="text-muted-foreground hover:text-neon-blue"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-neon-blue transition-colors"
              >
                <Icon
                  name="Twitter"
                  size={20}
                  className="text-muted-foreground hover:text-neon-blue"
                />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-card border border-border rounded-lg flex items-center justify-center hover:border-neon-blue transition-colors"
              >
                <Icon
                  name="Youtube"
                  size={20}
                  className="text-muted-foreground hover:text-neon-blue"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 mt-8 text-center text-muted-foreground">
          <p>
            &copy; 2024 CSCase. Все права защищены. Игра только для лиц старше
            18 лет.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
