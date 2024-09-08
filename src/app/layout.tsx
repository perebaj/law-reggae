import type { Metadata } from "next";
import "./globals.css";
// import { Inter as FontSans } from "next/font/google";
import { McLaren as Font } from "next/font/google";
import {
  ClerkProvider,
  // SignInButton,
  // SignedIn,
  // SignedOut,
  // UserButton
} from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
// const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import Header from "./header";

const fontMono = Font({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "blup",
  description: "Todos seus processos em um só lugar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={cn(fontMono.className, "bg-white-950 antialiased")}>
          {userId && <Header />}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
