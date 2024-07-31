import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "./container/dashboard-page/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Heroic AI",
  description: "Coming Soon",
  favicon: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-w-screen font-inter bg-primary-bg min-h-screen w-full text-white">
          {children}
          <ScrollToTop />
        </main>
      </body>
    </html>
  );
}
