import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "DGA Company | Performance Estratégica",
  description: "Atuação 100% voltada para a prática de performance. Nosso foco absoluto é o aumento de faturamento e a busca implacável por resultados tangíveis para PMEs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${bebas.variable} ${montserrat.variable}`}>
      <body className="font-montserrat bg-[#050505] text-white">
        <main className="w-full bg-[#050505] overflow-x-clip">
          {children}
        </main>
      </body>
    </html>
  );
}
