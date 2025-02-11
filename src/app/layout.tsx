import type { Metadata } from "next";
import "./globals.css";
import "@canvas-fonts/arial-narrow"



export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       ><main className="max-w-6xl mx-auto">
        {children}
        </main>
      </body>
    </html>
  );
}
