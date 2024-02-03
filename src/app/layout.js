import { Audiowide } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/Navbar";

const audiowide = Audiowide({
  subsets: ["latin"],
  weight: '400',
  variable: '--font-audiowide'
});

export const metadata = {
  title: "WEBGENYX",
  description: "Your One-stop solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={audiowide.variable}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
