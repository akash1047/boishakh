import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Boishakh",
  description: "An LLM model for bengali literature.",
  openGraph: {
    title: "Boishakh AI",
    description: "An LLM model for bengali literature.",
    url: "https://boishakh-wine.vercel.app/",
    siteName: "Boishakh",
    images: [
      {
        url: "/boishakh.png",
        width: 400,
        height: 400,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Boishakh AI",
    description: "An LLM model for bengali literature.",
    images: ["/boishakh.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
