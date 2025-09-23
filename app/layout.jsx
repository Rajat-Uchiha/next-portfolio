import { Inconsolata } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inconsolata = Inconsolata({ subsets: ["latin"] });

export const metadata = {
  title: "Rajat Kalotra | I Code | I Learn | I Repeat",
  description: "Rajat Kalotra, Software Engineer AT SML Isuzu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inconsolata.className}>
        {children}
        <Script src="https://www.noupe.com/embed/0198d2880fa975a1b9a827ac2980ee300ff9.js"></Script>
      </body>
    </html>
  );
}
