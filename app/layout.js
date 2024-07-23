import { Instrument_Sans } from "next/font/google";
import "./globals.css";

const instrument = Instrument_Sans({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={instrument.className}>{children}</body>
    </html>
  );
}
