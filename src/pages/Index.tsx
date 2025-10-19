import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [memeText, setMemeText] = useState('');
  const [selectedCharacter, setSelectedCharacter] = useState('masyanya');

  const characters = [
    { id: 'masyanya', name: 'Масяня', emoji: '👧' },
    { id: 'hryundel', name: 'Хрюндель', emoji: '🐷' },
    { id: 'lokhmaty', name: 'Лохматый', emoji: '🦁' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-yellow-50 to-blue-100">
      <header className="border-b-4 border-black bg-white shadow-[0_4px_0px_0px_rgba(0,0,0,1)]">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl md:text-6xl text-primary animate-fade-in">
              МАСЯНЯ
            </h1>
            <nav className="hidden md:flex gap-6">
              {['О Масяне', 'Комиксы', 'Мерч', 'Новости'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="font-bold text-lg hover:text-primary transition-colors">
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="comic-badge text-2xl">
              ⚡ КУЛЬТОВЫЙ МУЛЬТФИЛЬМ ⚡
            </div>
            <h2 className="text-5xl md:text-7xl leading-tight">
              Привет, чуваки!
            </h2>
            <div className="comic-bubble max-w-md">
              <p className="text-xl font-medium">
                Добро пожаловать на официальный фан-сайт Масяни! Здесь ты найдёшь комиксы, мультики и кучу прикольного мерча!
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="comic-button">
                <Icon name="Play" className="inline mr-2" size={20} />
                Смотреть мультики
              </button>
              <button className="comic-button bg-secondary">
                <Icon name="BookOpen" className="inline mr-2" size={20} />
                Читать комиксы
              </button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="w-full h-96 bg-gradient-to-br from-primary to-accent rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-9xl">
              👧
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-yellow-400 starburst border-4 border-black flex items-center justify-center">
              <span className="text-2xl font-bold transform rotate-12">БУМ!</span>
            </div>
          </div>
        </div>
      </section>

      <section id="мемы" className="container mx-auto px-4 py-16 bg-white border-y-4 border-black">
        <h2 className="text-5xl md:text-6xl text-center mb-12 animate-fade-in">
          🎨 Генератор Мемов
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="comic-card">
                <h3 className="text-2xl mb-4">Выбери персонажа</h3>
                <div className="grid grid-cols-3 gap-4">
                  {characters.map((char) => (
                    <button
                      key={char.id}
                      onClick={() => setSelectedCharacter(char.id)}
                      className={`p-4 rounded-xl border-4 border-black transition-all ${
                        selectedCharacter === char.id
                          ? 'bg-primary text-white scale-110'
                          : 'bg-white hover:bg-secondary'
                      }`}
                    >
                      <div className="text-5xl mb-2">{char.emoji}</div>
                      <div className="font-bold text-sm">{char.name}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="comic-card">
                <h3 className="text-2xl mb-4">Добавь текст</h3>
                <Textarea
                  placeholder="Напиши что-нибудь смешное..."
                  value={memeText}
                  onChange={(e) => setMemeText(e.target.value)}
                  className="border-4 border-black rounded-xl min-h-32 text-lg font-medium"
                />
              </div>

              <button className="comic-button w-full">
                <Icon name="Download" className="inline mr-2" size={20} />
                Скачать мем
              </button>
            </div>

            <div className="comic-card bg-gradient-to-br from-pink-200 to-blue-200">
              <h3 className="text-2xl mb-4 text-center">Твой мем</h3>
              <div className="relative">
                <div className="w-full aspect-square bg-white rounded-xl border-4 border-black flex items-center justify-center">
                  <span className="text-9xl">
                    {characters.find(c => c.id === selectedCharacter)?.emoji}
                  </span>
                </div>
                {memeText && (
                  <div className="absolute bottom-4 left-4 right-4 comic-bubble animate-scale-in">
                    <p className="text-lg font-bold text-center">{memeText}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="о-масяне" className="container mx-auto px-4 py-16">
        <h2 className="text-5xl md:text-6xl text-center mb-12">
          📖 О Масяне
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="comic-card animate-fade-in">
            <div className="text-6xl mb-4">👧</div>
            <h3 className="text-3xl mb-3">Персонаж</h3>
            <p className="text-lg">
              Масяня — культовый персонаж российской анимации, созданный Олегом Куваевым в 2001 году
            </p>
          </div>
          <div className="comic-card animate-fade-in">
            <div className="text-6xl mb-4">🎬</div>
            <h3 className="text-3xl mb-3">История</h3>
            <p className="text-lg">
              Первый выпуск вышел в интернете и быстро стал вирусным. Сейчас более 150 серий!
            </p>
          </div>
          <div className="comic-card animate-fade-in">
            <div className="text-6xl mb-4">⭐</div>
            <h3 className="text-3xl mb-3">Культура</h3>
            <p className="text-lg">
              Масяня стала частью поп-культуры с узнаваемыми фразами и уникальным питерским юмором
            </p>
          </div>
        </div>
      </section>

      <section id="комиксы" className="container mx-auto px-4 py-16 bg-gradient-to-r from-secondary/20 to-accent/20 border-y-4 border-black">
        <h2 className="text-5xl md:text-6xl text-center mb-12">
          🎨 Комиксы и мультфильмы
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="comic-card cursor-pointer transition-transform hover:scale-105">
            <div className="w-full h-48 bg-gradient-to-br from-primary to-pink-300 rounded-xl border-4 border-black mb-4 flex items-center justify-center">
              <Icon name="BookOpen" size={64} />
            </div>
            <h3 className="text-3xl mb-2">Комиксы онлайн</h3>
            <p className="text-lg mb-4">Читайте все выпуски комиксов про Масяню бесплатно</p>
            <button className="comic-button w-full">Читать</button>
          </div>
          <div className="comic-card cursor-pointer transition-transform hover:scale-105">
            <div className="w-full h-48 bg-gradient-to-br from-accent to-blue-300 rounded-xl border-4 border-black mb-4 flex items-center justify-center">
              <Icon name="Youtube" size={64} />
            </div>
            <h3 className="text-3xl mb-2">Мультфильмы</h3>
            <p className="text-lg mb-4">Смотрите все серии на официальном YouTube канале</p>
            <button className="comic-button bg-accent w-full">Смотреть</button>
          </div>
        </div>
      </section>

      <section id="мерч" className="container mx-auto px-4 py-16">
        <h2 className="text-5xl md:text-6xl text-center mb-12">
          🛍️ Merchandise
        </h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { icon: 'Shirt', name: 'Футболки', color: 'from-primary to-pink-400' },
            { icon: 'Coffee', name: 'Кружки', color: 'from-secondary to-yellow-400' },
            { icon: 'Sticker', name: 'Стикеры', color: 'from-accent to-green-400' },
            { icon: 'Smartphone', name: 'Чехлы', color: 'from-blue-400 to-purple-400' },
          ].map((item) => (
            <div key={item.name} className="comic-card cursor-pointer transition-transform hover:scale-105">
              <div className={`w-full h-32 bg-gradient-to-br ${item.color} rounded-xl border-4 border-black mb-4 flex items-center justify-center`}>
                <Icon name={item.icon as any} size={48} />
              </div>
              <h3 className="text-2xl text-center">{item.name}</h3>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="comic-button text-xl px-8 py-4">
            <Icon name="ShoppingCart" className="inline mr-2" size={24} />
            Перейти в магазин
          </button>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-white border-y-4 border-black">
        <h2 className="text-5xl md:text-6xl text-center mb-12">
          📱 Социальные сети
        </h2>
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { name: 'Instagram', icon: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
            { name: 'VK', icon: 'Facebook', color: 'bg-blue-600' },
            { name: 'YouTube', icon: 'Youtube', color: 'bg-red-600' },
            { name: 'Telegram', icon: 'Send', color: 'bg-blue-500' },
          ].map((social) => (
            <button key={social.name} className={`${social.color} text-white font-bold py-4 px-8 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}>
              <Icon name={social.icon as any} className="inline mr-2" size={24} />
              {social.name}
            </button>
          ))}
        </div>
      </section>

      <section id="новости" className="container mx-auto px-4 py-16">
        <h2 className="text-5xl md:text-6xl text-center mb-12">
          📰 Новости
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { date: '15 окт 2025', title: 'Новая серия уже в эфире!', badge: 'НОВИНКА' },
            { date: '10 окт 2025', title: 'Встреча фанатов в Санкт-Петербурге', badge: 'СОБЫТИЕ' },
            { date: '5 окт 2025', title: 'Новый мерч в магазине', badge: 'МЕРЧ' },
          ].map((news, i) => (
            <div key={i} className="comic-card cursor-pointer transition-transform hover:scale-105">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="text-sm font-bold text-muted-foreground mb-2">{news.date}</div>
                  <h3 className="text-2xl mb-2">{news.title}</h3>
                </div>
                <div className="comic-badge text-sm whitespace-nowrap">{news.badge}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-br from-primary/20 to-accent/20 border-t-4 border-black">
        <h2 className="text-5xl md:text-6xl text-center mb-12">
          📧 Контакты
        </h2>
        <div className="max-w-2xl mx-auto comic-card">
          <form className="space-y-6">
            <div>
              <label className="block text-xl font-bold mb-2">Имя</label>
              <Input className="border-4 border-black rounded-xl text-lg" placeholder="Твоё имя" />
            </div>
            <div>
              <label className="block text-xl font-bold mb-2">Email</label>
              <Input type="email" className="border-4 border-black rounded-xl text-lg" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-xl font-bold mb-2">Сообщение</label>
              <Textarea className="border-4 border-black rounded-xl text-lg min-h-32" placeholder="Напиши что-нибудь..." />
            </div>
            <button type="submit" className="comic-button w-full text-xl py-4">
              <Icon name="Send" className="inline mr-2" size={24} />
              Отправить
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-foreground text-white border-t-4 border-black py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl mb-4">МАСЯНЯ</h3>
          <p className="text-lg mb-6">Культовый российский мультфильм с 2001 года</p>
          <div className="flex justify-center gap-4 mb-6">
            <Icon name="Instagram" size={32} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Facebook" size={32} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Youtube" size={32} className="cursor-pointer hover:text-primary transition-colors" />
            <Icon name="Send" size={32} className="cursor-pointer hover:text-primary transition-colors" />
          </div>
          <p className="text-sm opacity-75">© 2025 Масяня. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
