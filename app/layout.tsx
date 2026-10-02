import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Melati Puspa Anindita",
  description: "Graphic Designer & Editor Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="relative min-h-screen flex flex-col text-[#E4CDAF]">
        {/* Background image — cover full screen */}
        <div
          className="fixed inset-0 -z-20 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/image/download-_8_ - Copy.jpg')",
          }}
        />

        <div className="fixed inset-0 -z-10 bg-[#5B3A29]/75" />

        <Navbar />
        <main className="flex-1 relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}