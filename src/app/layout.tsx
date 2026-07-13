import type { Metadata } from "next";
import "./globals.css";



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
      <body>
        <header>
          <h1>The blog</h1>
        </header>
        <div className="bg-red-500">
          {children}
        </div>
        <footer>
          <p>© 2025 The blog</p>
        </footer>
      </body>
    </html>
  );
}
