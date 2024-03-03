import type { Metadata } from "next";
import "./globals.css";
import Provider from "./provider";

export const metadata: Metadata = {
  title: "Pizzaiola",
  description: "Pizzeria Pizzaiola",
  keywords: ['pizzaiola','pizza', 'pizzeria', 'fastfood']
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
