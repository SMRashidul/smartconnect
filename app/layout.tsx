
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartConnect",
  description: "Connect students with companies and mentors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
