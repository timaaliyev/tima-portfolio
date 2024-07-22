/* eslint-disable @next/next/next-script-for-ga */
import { Layout } from "@/components";
import type { Metadata } from "next";
import { Kodchasan, Pacifico, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pacifico",
  display: "swap",
});

const joti = Kodchasan({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-joti",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio - Teymur Aliyev",
  description:
    "Welcome to my Portfolio Page, showcasing my journey and accomplishments in the world of design and development. ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="YOUR_DOMAIN_HERE"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </head>
      <body
        className={`${roboto.variable} ${pacifico.variable} ${joti.variable}`}
      >
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
