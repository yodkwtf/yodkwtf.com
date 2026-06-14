import type { Metadata, Viewport } from 'next';
import { Outfit, Instrument_Serif, DM_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/ui/ThemeProvider';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { siteConfig } from '@/config/site';
import { getResumeUrl } from '@/sanity/lib/queries';
import { logger } from '@/lib/logger';
import '@/app/globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
});

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'full-stack developer',
    'software engineer',
    'React.js',
    'Next.js',
    'TypeScript',
    'web development',
    'frontend',
    'backend',
  ],
  authors: [{ name: siteConfig.author }],
  creator: siteConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: '@yodkwtf',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f8f5' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0e0c' },
  ],
  width: 'device-width',
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  let resumeUrl: string = siteConfig.links.resume;
  try {
    const sanityUrl = await getResumeUrl();
    if (sanityUrl) resumeUrl = sanityUrl;
  } catch (err) {
    logger.warn('RootLayout', 'Failed to fetch resume URL from Sanity', err);
  }

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${instrumentSerif.variable} ${dmMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||((!t||t==='system')&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d)document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if(!('IntersectionObserver' in window))return;document.documentElement.classList.add('js');var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('is-visible');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px'});function obs(el){if(el.nodeType===1&&el.matches('[data-animate],[data-stagger]'))io.observe(el);}function scan(r){if(!r||!r.querySelectorAll)return;r.querySelectorAll('[data-animate]:not(.is-visible),[data-stagger]:not(.is-visible)').forEach(function(el){io.observe(el);});}function init(){scan(document);new MutationObserver(function(ms){ms.forEach(function(m){m.addedNodes.forEach(function(n){obs(n);scan(n);});});}).observe(document.body,{childList:true,subtree:true});}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();})();`,
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar resumeUrl={resumeUrl} />
            <main className="flex-1">{children}</main>
            <Footer resumeUrl={resumeUrl} />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
