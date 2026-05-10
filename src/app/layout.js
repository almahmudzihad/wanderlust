import { Josefin_Sans} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "Wanderlust",
  description: "Your gateway to extraordinary travel experiences around the world.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="">
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  );
}
