import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "./_context/UserContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  auth,
}: Readonly<{
  children: React.ReactNode;
  auth: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          {auth}
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
