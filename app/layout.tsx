import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#09090b",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default:
      "سعید مرادی | طراح سایت و برنامه‌نویس حرفه‌ای | Full-Stack Developer",
    template: "%s | سعید مرادی - طراح سایت",
  },

  description:
    "سعید مرادی، طراح سایت و برنامه‌نویس ارشد با ۱۰+ سال تجربه در توسعه وب مدرن. متخصص Next.js، React و TypeScript. طراحی سایت‌های شرکتی، فروشگاهی و شخصی با بهترین کیفیت و سئوی حرفه‌ای. مشاوره رایگان توسعه وب.",

  keywords: [
    "طراحی سایت",
    "برنامه نویس",
    "سعید مرادی",
    "Next.js",
    "React",
    "توسعه وب",
    "Frontend Developer",
    "طراحی سایت شرکتی",
    "طراحی سایت فروشگاهی",
    "برنامه نویس ایرانی",
    "TypeScript",
    "Tailwind CSS",
    "UI/UX Designer",
    "Web Development",
    "Freelancer",
    "Senior Developer",
  ],

  openGraph: {
    type: "website",
    locale: "fa_IR",
    alternateLocale: "en_US",
    siteName: "سعید مرادی | طراح سایت حرفه‌ای",
    title: "سعید مرادی | طراح سایت و برنامه‌نویس ارشد | Full-Stack Developer",
    description:
      "طراحی سایت‌های مدرن و حرفه‌ای با جدیدترین تکنولوژی‌ها. ۱۰+ سال تجربه در صنعت نرم‌افزار. آماده همکاری با کارفرماهای با فرهنگ و پروژه‌های چالش‌برانگیز.",
    url: "https://moradisaeid.ir",
    images: [
      {
        url: "https://moradisaeid.ir/icons/logo.png",
        width: 512,
        height: 512,
        alt: "سعید مرادی - طراح سایت و برنامه‌نویس",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "سعید مرادی | طراح سایت و برنامه‌نویس حرفه‌ای",
    description:
      "طراحی سایت‌های مدرن با Next.js و React. ۱۰+ سال تجربه. آماده همکاری با پروژه‌های خاص.",
    images: ["https://moradisaeid.ir/icons/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: "/icons/logo.png",
    shortcut: "/icons/logo.png",
    apple: "/icons/logo.png",
  },

  alternates: {
    canonical: "https://moradisaeid.ir",
    languages: {
      "en-US": "https://moradisaeid.ir/en",
    },
  },

  verification: {
    google: "google-site-verification=PUwYYTXAHy9Ob--mpI9ieC0sFBtSDpy2v4ftc-_H-ng",
  },

  category: "technology",
  creator: "Saeid Moradi",
  publisher: "Saeid Moradi",
  applicationName: "سعید مرادی | پورتفولیو",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className="h-full antialiased scroll-smooth">
      <head>
        {/* Schema Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "سعید مرادی | طراح سایت و برنامه‌نویس حرفه‌ای",
              "alternateName": "Saeid Moradi",
              "url": "https://moradisaeid.ir",
              "logo": "https://moradisaeid.ir/icons/logo.png",
              "image": "https://moradisaeid.ir/icons/logo.png",
              "description":
                "طراحی سایت‌های مدرن و حرفه‌ای با جدیدترین تکنولوژی‌ها. ۱۰+ سال تجربه در صنعت نرم‌افزار.",
              "email": "mailto:saeid.moradi.dev@gmail.com",
              "telephone": "+989190700386",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "IR",
              },
              "sameAs": [
                "https://github.com/saeid-moradi-designer",
                "https://instagram.com/saeidmoradidesigner",
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+989190700386",
                "contactType": "customer service",
                "availableLanguage": ["Persian", "English"],
              },
              "founder": {
                "@type": "Person",
                "name": "سعید مرادی",
                "jobTitle": "طراح سایت و برنامه‌نویس ارشد",
                "knowsAbout": [
                  "Web Development",
                  "Next.js",
                  "React",
                  "TypeScript",
                  "Tailwind CSS",
                  "UI/UX Design",
                  "Frontend Development",
                  "SEO",
                ],
              },
            }),
          }}
        />

        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "هزینه طراحی سایت چقدر است؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "هزینه طراحی سایت به نیازهای پروژه شما بستگی دارد. برای مشاوره رایگان و استعلام قیمت با شماره 09190700386 تماس بگیرید.",
                  },
                },
                {
                  "@type": "Question",
                  name: "چقدر طول می‌کشد سایت آماده شود؟",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "زمان تحویل پروژه بین ۱ تا ۴ هفته متغیر است. پروژه‌های فوری در کمتر از یک هفته تحویل داده می‌شوند.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-violet-500 focus:text-white focus:rounded-lg"
        >
          پرش به محتوای اصلی
        </a>

        <main id="main-content" className="flex-1">
          {children}
        </main>
      </body>
    </html>
  );
}