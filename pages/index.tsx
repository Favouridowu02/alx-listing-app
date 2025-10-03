import Image from "next/image";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const quickSand = Quicksand({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
})

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} ${quickSand.className} p-0 m-0`}
    >
      <Header />
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      </main>
      <Footer/>
    </div>
  );
}
