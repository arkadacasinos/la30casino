import '@fontsource-variable/inter'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className="bg-[#0b0312]">
      <head>
        <meta charSet="utf-8" />
        <title>La Casino (Ля Казино) официальный сайт – зеркало рабочее вход и играть онлайн</title>
        <meta
          name="description"
          content="Официальный сайт La Casino (Ля Казино): рабочее зеркало на сегодня, быстрый вход, топовые слоты и Live-игры. Играйте в Ля Казино онлайн с бонусом 225% и 1000 фриспинов!"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://la30casino.vercel.app" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="La Casino (Ля Казино) официальный сайт – играть онлайн в зеркало" />
        <meta
          property="og:description"
          content="Рабочее зеркало La Casino: официальный сайт Ля Казино для игры на реальные деньги с моментальными выплатами и щедрыми бонусами."
        />
        <meta property="og:url" content="https://la30casino.vercel.app" />
        <meta property="og:site_name" content="La Casino" />
        <meta property="og:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kZkDYcsDuqLIVzms9d8EnyCgJubLcI.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="La Casino (Ля Казино) официальный сайт" />
        <meta
          name="twitter:description"
          content="Вход в Ля Казино через официальное рабочее зеркало онлайн. Топовые игровые автоматы и бонусы."
        />
        <meta name="twitter:image" content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-kZkDYcsDuqLIVzms9d8EnyCgJubLcI.png" />
        <meta name="theme-color" content="#0b0312" />
      </head>
      <body className="antialiased bg-[#0b0312] text-[#f4effa] font-sans selection:bg-[#e01267] selection:text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
