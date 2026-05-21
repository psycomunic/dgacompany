import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-kanit",
});

export const metadata: Metadata = {
  title: "Jack -- 3D Creator",
  description: "A 3D Creator portfolio landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kanit.variable}>
      <body className="font-kanit bg-[#0C0C0C] text-white">
        <main className="w-full bg-[#0C0C0C] overflow-x-clip">
          {children}
        </main>
      </body>
    </html>
  );
}
