import "./globals.css";
import { Raleway, Pixelify_Sans } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";
import Navbar from "@/components/Navbar";

const raleway = Raleway({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
  variable: "--raleway-text-font",
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  variable: "--pixelify-serif-display-font",
});

export const metadata = {
  title: "AISC Official Website",
  description:
    "AISC is dedicated to providing AI literacy through programs and events",
};

type LayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" className={`${raleway.variable} ${pixelify.variable}`}>
      <body className={raleway.className}>
        <ReactQueryClientProvider>
          <Navbar />
          {children}
        </ReactQueryClientProvider>
      </body>
    </html>
  );
}
