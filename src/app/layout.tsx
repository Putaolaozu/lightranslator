import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Lightrans";
const APP_DEFAULT_TITLE = "Lightranslator, 一个简洁，纯粹的翻译应用";
const APP_TITLE_TEMPLATE = "Lightranslator-光翻译";
const APP_DESCRIPTION = "This is a pure translator application，这是一个简洁，纯粹的翻译应用";

export const metadata = {
  applicationName: APP_NAME,
  title: {
    default: "Lightranslator-光翻译",
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-cn">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="apple-mobile-web-app-title" content="Lightrans" />
        <meta name="theme-color" media="(prefers-color-scheme: light)" content="#eaeff0" />
        <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#0A0A0A" />
        <link rel="apple-touch-icon" href="/app-icons/translate-256.png"></link>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
