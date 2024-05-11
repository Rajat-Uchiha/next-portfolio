import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const Josefin = Josefin_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Rajat Kalotra | Web Developer | Programmer",
  description: "Rajat Kalotra Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={Josefin.className}>{children}</body>
    </html>
  );
}
