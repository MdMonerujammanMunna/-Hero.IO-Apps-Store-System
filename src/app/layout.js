import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "../Components/NavBar/page";
import Footer from "@/Components/Footer/page";
import Provider from "./lib/providers";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hero.IO",
  description: "A New Apps Store",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      data-theme="light"
    >
      <body className="min-h-full container mx-auto flex flex-col FontAll">
        <Provider>
          <ToastContainer />
          <NavBar></NavBar>
          <main> {children}</main>
          <Footer></Footer>
        </Provider>
      </body>
    </html>
  );
}
