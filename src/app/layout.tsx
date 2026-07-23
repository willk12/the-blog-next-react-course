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
        
        <div >
          {children}
        </div>
        
      </body>
    </html>
  );
}
