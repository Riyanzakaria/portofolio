import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { LenisProvider } from "@/components/LenisProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { ProjectModal } from "@/components/ProjectModal";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { CommandPalette } from "@/components/CommandPalette";
import { cn } from "@/lib/utils";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://portofolio-lime-three-51.vercel.app";

const SITE_TITLE = "Riyan Zakaria Zulkarnain - Software Engineer";
const SITE_DESCRIPTION =
  "Interactive portfolio of Riyan Zakaria Zulkarnain, a software engineering student and developer building web and mobile products with Next.js, Laravel, and Kotlin.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s | Riyan Zakaria Zulkarnain",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Riyan Zakaria Zulkarnain",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "Laravel",
    "Kotlin",
    "Web Developer",
    "Politeknik Negeri Madiun",
  ],
  authors: [{ name: "Riyan Zakaria Zulkarnain" }],
  creator: "Riyan Zakaria Zulkarnain",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Riyan Zakaria Zulkarnain - Portofolio",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", plusJakartaSans.variable, jetbrainsMono.variable, "font-sans")}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LenisProvider>
            <WelcomeScreen />
            <CommandPalette />
            <CustomCursor />
            <ProjectModal />
            {children}
          </LenisProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
