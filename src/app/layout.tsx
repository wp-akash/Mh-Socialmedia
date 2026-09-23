import Footertwo from "@/components/Footertwo";
import "./globals.css";
import { HeroHeader } from "@/components/hero6-header2";
import ConditionalLayout from "@/components/ConditionalLayout";
import LanguageToggle from "@/components/LanguageToggle";
// import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { Poppins } from "next/font/google";
// import Loader from "@/components/Loader";
import Script from "next/script";
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata = {
  title:
    "Home - MH Social Media",
  description:
    "MH Social Media is a marketing company that provides marketing solutions, services, and consultations to a range of organizations worldwide. Embrace innovation and growth with MH Social Media, where reliable solutions perfect for your needs await you. Our expertise lies in driving your organization's growth by providing modern and innovative solutions utilizing advanced technology and tools.",
  icons: {
    icon: "/faveicon.png",
  },
  other: {
    // "facebook-domain-verification": "xv4lsoin59roqaw6a5rdm9hq9jdoml",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* Google Tag Manager */}

      </head>
      <body>
        {/* <SmoothScrollProvider> */}
        {/* <Loader /> */}
        <LanguageToggle />
        <ConditionalLayout
          header={<HeroHeader />}
          footer={<Footertwo />}
        >
          {children}
        </ConditionalLayout>
        {/* </SmoothScrollProvider> */}
      </body>
    </html>
  );
}
