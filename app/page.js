import Image from "next/image";
import Header from "./components/Header";
import LoginPage from "./components/LoginPage";
import { Instrument_Sans } from "next/font/google";
const instrument = Instrument_Sans({ 
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"] 
});
export default function Home() {
  return (
    <main className={`md:flex md:flex-col md:justify-center items-center md:px-[146px] md:py-[226px] ${instrument.className}`}>
  <Header />
  <LoginPage />
    </main>
  );
}
