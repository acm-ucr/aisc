import "./globals.css";
import { Raleway } from "next/font/google";
import { ReactQueryClientProvider } from "@/utils/react-query";

const raleway = Raleway({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={raleway.className}>
        <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
      </body>
    </html>
  );
}
