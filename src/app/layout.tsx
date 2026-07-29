import type { Metadata } from "next";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Container } from "@/components/Container";

export const metadata: Metadata = {
  title: "The blog- Este é um blog feito com Next.js",
  description: "Este é um blog feito com Next.js",
};

type RootLayoutProps = {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html
      lang="pt-BR"
    >
      <body >
        
        <Container>
          <Header />
          {children}</Container>
        <Footer />
      </body>
    </html>
  );
}
