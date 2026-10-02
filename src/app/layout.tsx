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

export const metadata: Metadata = {
  title: "Riyan Zakaria - Portofolio",
  description: "Portofolio Software Engineer interaktif",
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
