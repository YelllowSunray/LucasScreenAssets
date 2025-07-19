import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blockrise - Crypto Custody Dashboard",
  description: "Live dashboard showing Blockrise's crypto custody services, assets under management, and regulatory compliance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
