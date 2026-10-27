export default function Page() {
  const REF_URL = "https://copper-ray.com/?serial=61365830&creative_id=9330"

  const tickerItems = [
    { id: "ID 68.....22", mult: "*1,3", win: "6 600 RUB", dep: "5 000 RUB депозит", isStar: false },
    { id: "ID 71.....76", mult: "*4,8", win: "2 520 RUB", dep: "523 RUB депозит", isStar: false },
    { id: "ID 30.....32", mult: "*2,5", win: "3 200 RUB", dep: "1 302 RUB депозит", isStar: false },
    { id: "ID 62.....80", mult: "*10", win: "5 000 RUB", dep: "502 RUB депозит", isStar: true },
    { id: "ID 27.....90", mult: "*4,1", win: "5 003 RUB", dep: "1 207 RUB депозит", isStar: false },
    { id: "ID 21.....83", mult: "*1,6", win: "5 756 RUB", dep: "3 507 RUB депозит", isStar: false },
  ]

  return (
    <div className="min-h-screen bg-[#07010e] text-[#f4effa] flex flex-col">
      {/* 1. Header / Top Navigation */}
      <header className="z9k2-header sticky top-0 z-50 w-full px-3 sm:px-6 lg:px-8 py-2.5 bg-[#0b0312]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Mobile menu burger */}
            <a href={REF_URL} className="text-zinc-300 hover:text-white p-1" aria-label="Меню">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </a>

            {/* Logo */}
            <a href={REF_URL} className="flex items-center gap-2 group">
              <span className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#180927] border-2 border-[#e01267] text-white font-black text-base sm:text-lg italic tracking-tighter shadow-[0_0_12px_rgba(224,18,103,0.5)]">
                ЛЯ
              </span>
              <div className="flex flex-col leading-none">
                <span className="font-black text-base sm:text-lg italic text-white tracking-tight uppercase group-hover:text-[#ff428d] transition-colors">
                  La Casino
                </span>
                <span className="text-[8px] sm:text-[9px] font-bold text-[#e01267] tracking-wider uppercase">
                  Официальный сайт
                </span>
              </div>
            </a>

            {/* Desktop Nav Items */}
            <nav className="hidden md:flex items-center gap-5 ml-4 text-xs font-semibold text-zinc-300">
              <a href={REF_URL} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="text-[#e01267]">🎁</span>
                <span>Бонусы</span>
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="text-purple-400">🎰</span>
                <span>Казино</span>
              </a>
              <a href={REF_URL} className="flex items-center gap-1.5 hover:text-white transition-colors">
                <span className="text-emerald-400">📺</span>
                <span>Live Казино</span>
              </a>
            </nav>
          </div>

          {/* Right Action buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a href={REF_URL} className="text-zinc-400 hover:text-white p-1 sm:p-2" aria-label="Поиск">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </a>
            <a
              href={REF_URL}
              className="z9k2-btn-login px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold text-zinc-200"
            >
              Вход
            </a>
            <a
              href={REF_URL}
              className="z9k2-btn-register px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs font-extrabold text-white uppercase tracking-wider"
            >
              Регистрация
            </a>
          </div>
        </div>
      </header>

      {/* 2. Hero Screen: Interactive Banner matching Screen 2 */}
      <section className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 pt-2 sm:pt-4">
        {/* Banner container */}
        <div className="relative w-full rounded-2xl md:rounded-3xl overflow-hidden bg-[#0d0417] border border-white/5 min-h-[440px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px]">
          {/* Background image & precise responsive positioning */}
          <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kZkDYcsDuqLIVzms9d8EnyCgJubLcI.png"
              alt="La Casino"
              className="w-full h-[155%] object-cover object-right md:object-[right_20%] -translate-y-[10%]"
            />
            {/* Desktop: gradient on the left so typography & buttons have crisp, clear background */}
            <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-[#0d0417] via-[#0d0417]/90 to-transparent w-3/5" />
            {/* Mobile: subtle gradient so character & city stay bright at top, while text gets dark backing at bottom */}
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#0d0417] via-[#0d0417]/75 to-transparent" />
          </div>

          {/* Banner content: on mobile, pushed to bottom with mt-auto */}
          <div className="relative z-10 w-full max-w-xl px-5 sm:px-8 md:px-12 pt-28 pb-8 sm:py-12 flex flex-col justify-end md:justify-center min-h-[440px] sm:min-h-[440px] md:min-h-[480px] lg:min-h-[520px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e01267]/25 border border-[#e01267]/50 text-[#ff70a5] text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-2.5 sm:mb-4 backdrop-blur-md self-start shadow-md">
              <span className="w-2 h-2 rounded-full bg-[#e01267] animate-pulse" />
              Рабочее зеркало на сегодня
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.08] mb-2 sm:mb-3 drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
              МОЩНЫЙ СТАРТ:
            </h1>

            <p className="text-sm sm:text-xl md:text-2xl font-bold text-zinc-100 mb-5 sm:mb-6 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
              до 225% + 1000 ФС на четыре депозита
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <a
                href={REF_URL}
                className="z9k2-btn-register inline-flex items-center justify-center px-8 py-3 rounded-full text-base sm:text-lg font-black text-white uppercase tracking-wider shadow-lg shadow-[#e01267]/50 active:scale-95 text-center"
              >
                Зарегаться!
              </a>
              <a
                href={REF_URL}
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs sm:text-base font-bold text-zinc-200 bg-[#1e0a30]/90 hover:bg-[#2b0f45] border border-white/10 transition-all text-center backdrop-blur-md"
              >
                Скачать приложение
              </a>
            </div>
          </div>
        </div>

        {/* TOP Payouts Ticker bar under the banner */}
        <div className="w-full bg-[#0d0417] rounded-2xl border border-white/5 py-3.5 px-4 sm:px-6 mt-3">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-zinc-300">
              ТОП ВЫПЛАТЫ
            </span>
            <span className="text-[#e01267] text-sm">✦</span>
            <span className="text-sm sm:text-base font-black text-white ml-2 tracking-tight">
              5 148 339 RUB
            </span>
          </div>

          {/* Horizontal ticker scroll */}
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
            {tickerItems.map((item, idx) => (
              <a
                key={idx}
                href={REF_URL}
                className="z9k2-ticker-card flex-shrink-0 flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-transform hover:scale-[1.02]"
              >
                <div
                  className={`flex items-center justify-center w-8 h-8 rounded-lg font-black text-xs ${
                    item.isStar ? "z9k2-multiplier-star" : "z9k2-multiplier-chip"
                  }`}
                >
                  {item.mult}
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] text-zinc-400 font-mono leading-none mb-1">
                    {item.id}
                  </span>
                  <div className="flex items-center gap-1 leading-none mb-1">
                    <span className="text-xs sm:text-sm font-bold text-white">
                      {item.win}
                    </span>
                    <span className="text-[10px] text-zinc-400">↗</span>
                  </div>
                  <span className="text-[9px] text-zinc-400 leading-none">
                    {item.dep}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SEO Text Block (300-400 words, rich in all requested keywords) */}
      <main className="w-full flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <article className="space-y-6 sm:space-y-8">
          {/* Section 1 */}
          <div id="section-official" className="z9k2-seo-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-lg sm:text-2xl font-extrabold text-white mb-3 sm:mb-4">
              La Casino официальный сайт и актуальный вход для каждого игрока
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-3">
              Добро пожаловать в игровой клуб <strong className="text-white">La Casino</strong>, где каждый азартный гость получает премиальный сервис, быстрые выплаты и честную отдачу слотов. Надежный <strong className="text-white">La Casino официальный</strong> портал предоставляет круглосуточный доступ к лицензионному каталогу развлечений, включая новинки барабанов и настольные игры с живыми дилерами. Запуская проверенный <strong className="text-white">La Casino официальный сайт</strong>, вы можете мгновенно пройти регистрацию за 15 секунд, активировать стартовый бонусный пакет до 225% с 1000 фриспинов и комфортно погрузиться в мир крупных джекпотов.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              Удобная система фильтрации позволяет сортировать игры по провайдерам, уровню волатильности и наличию бонусных раундов. Вся персональная информация надежно защищена протоколами сквозного SSL-шифрования.
            </p>
          </div>

          {/* Section 2 */}
          <div id="section-mirror" className="z9k2-seo-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-lg sm:text-2xl font-extrabold text-white mb-3 sm:mb-4">
              La Casino зеркало рабочее: безопасный обход блокировок 24/7
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-3">
              Если основной домен временно недоступен из-за региональных ограничений интернет-провайдеров, на помощь приходит свежее <strong className="text-white">La Casino зеркало</strong>. Надежная альтернативная копия полностью дублирует все функции ресурса, бережно сохраняет ваш баланс, историю ставок и активные бонусы. Используя <strong className="text-white">ля казино зеркало рабочее</strong>, пользователям не требуется устанавливать сторонние VPN или сложные расширения — переход по защищенному каналу происходит автоматически.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              Актуальное <strong className="text-white">ля казино зеркало</strong> функционирует круглосуточно на высокоскоростных серверах, обеспечивая бесперебойный доступ к любимым автоматам в любое время суток.
            </p>
          </div>

          {/* Section 3 */}
          <div id="section-play" className="z9k2-seo-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-lg sm:text-2xl font-extrabold text-white mb-3 sm:mb-4">
              Ля казино играть онлайн на реальные деньги и демо-режиме
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-3">
              Для всех любителей ярких эмоций клуб <strong className="text-white">La казино</strong> создал максимально комфортные условия: возможность в <strong className="text-white">La Casino играть</strong> на рубли или протестировать софт бесплатно без финансового риска. Выбирая в <strong className="text-white">ля казино играть</strong>, вы получаете доступ к более чем 5000 слотов от мировых разработчиков Pragmatic Play, NetEnt, Nolimit City и Evolution Gaming.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              Современное <strong className="text-white">ля казино онлайн</strong> гарантирует высокий процент отдачи RTP (до 98%), моментальные пополнения через СБП, карты Мир и криптовалюту, а также оперативный вывод выигрышей без скрытых комиссий.
            </p>
          </div>

          {/* Section 4 */}
          <div id="section-brand" className="z9k2-seo-card p-6 sm:p-8 rounded-2xl">
            <h2 className="text-lg sm:text-2xl font-extrabold text-white mb-3 sm:mb-4">
              Ля казино официальный сайт: регистрация и мобильная версия
            </h2>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base mb-3">
              Выбирая проверенный <strong className="text-white">ля казино официальный</strong> ресурс, вы доверяете сертифицированной площадке с прозрачной финансовой политикой и круглосуточной поддержкой. Полнофункциональный <strong className="text-white">ля казино официальный сайт</strong> идеально адаптирован под смартфоны и планшеты: мобильная версия быстро открывается на iOS и Android без зависаний и лишнего трафика.
            </p>
            <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
              Регулярные турниры с миллионными призовыми фондами, еженедельный кэшбэк до 20% и оперативная служба поддержки делают бренд <strong className="text-white">ля казино</strong> выбором номер один для игроков в 2026 году.
            </p>
          </div>

          {/* CTA Banner in SEO block */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#210936] to-[#120420] border border-[#e01267]/30 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                Готовы сорвать куш в La Casino?
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300">
                Зарегистрируйтесь прямо сейчас и заберите 1000 фриспинов на первый депозит!
              </p>
            </div>
            <a
              href={REF_URL}
              className="z9k2-btn-register flex-shrink-0 px-8 py-3.5 rounded-full text-sm font-bold text-white uppercase tracking-wider"
            >
              Начать игру
            </a>
          </div>
        </article>
      </main>

      {/* 4. Footer with SEO Hashtags & Anchor links */}
      <footer className="w-full bg-[#040108] border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col gap-6">
          {/* Hashtags from keywords */}
          <div>
            <span className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3">
              Навигация и ключевые теги:
            </span>
            <div className="flex flex-wrap gap-2">
              <a href="#section-official" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#la_casino</a>
              <a href="#section-mirror" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#la_casino_зеркало</a>
              <a href="#section-play" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#la_casino_играть</a>
              <a href="#section-official" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#la_casino_официальный</a>
              <a href="#section-official" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#la_casino_официальный_сайт</a>
              <a href="#section-brand" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#la_казино</a>
              <a href="#section-brand" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#ля_казино</a>
              <a href="#section-mirror" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#ля_казино_зеркало</a>
              <a href="#section-mirror" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#ля_казино_зеркало_рабочее</a>
              <a href="#section-play" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#ля_казино_играть</a>
              <a href="#section-play" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#ля_казино_онлайн</a>
              <a href="#section-brand" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#ля_казино_официальный</a>
              <a href="#section-brand" className="z9k2-tag px-3 py-1.5 rounded-lg text-xs font-medium">#ля_казино_официальный_сайт</a>
            </div>
          </div>

          <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
            <p>© 2026 La Casino (Ля Казино). Все права защищены. 18+</p>
            <div className="flex items-center gap-4">
              <a href={REF_URL} className="hover:text-zinc-300 transition-colors">Правила и условия</a>
              <a href={REF_URL} className="hover:text-zinc-300 transition-colors">Ответственная игра</a>
              <a href={REF_URL} className="hover:text-zinc-300 transition-colors">Конфиденциальность</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
