import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Neurova Neurals Private Limited | Future-Ready EdTech for Kids & Schools",
  description: "Neurova Neurals Private Limited is an innovation-driven EdTech company empowering kids and schools with coding, robotics, AI, and STEM learning programs designed for the future.",
  keywords: [
    "Neurova Neurals", "EdTech for kids", "coding for children", "robotics education", "AI learning for kids", "STEM programs", "digital education", "school technology solutions", "EdTech", "Coding for Kids",
  ],
  authors: [{ name: "Neurova Neurals Private Limited" }],
  creator: "Neurova Neurals Private Limited",
  publisher: "Neurova Neurals Private Limited",

  metadataBase: new URL("https://www.neurovaneurals.com"),

  openGraph: {
    title: "Neurova Neurals Private Limited | Future-Ready EdTech for Kids & Schools",
    description:
      "Future-ready EdTech programs for kids and schools through coding, robotics, AI, and STEM learning.",
    url: "https://www.neurovaneurals.com",
    siteName: "Neurova Neurals",
    type: "website",
    locale: "en_US"
  },

  twitter: {
    card: "summary_large_image",
    title: "Neurova Neurals Private Limited | Future-Ready EdTech for Kids & Schools",
    description:
      "Empowering young minds with coding, robotics, AI, and STEM education."
  },

  robots: {
    index: false,
    follow: false
  }

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
