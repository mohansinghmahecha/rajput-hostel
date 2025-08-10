import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Rajput Chatrawas",
  description: "Royal Rajput Heritage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
         {/* Standard favicon */}
        <link rel="icon" href="/assets/icons/favicon.ico" sizes="any" />
        
        {/* PNG favicons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/favicon-16x16.png" />

        {/* Apple Touch icon (iOS home screen) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/icons/apple-touch-icon.png" />

        {/* Android Chrome icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/assets/icons/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/assets/icons/android-chrome-512x512.png" />

        {/* Optional: manifest.json if you have a PWA */}
        {/* <link rel="manifest" href="/manifest.json" /> */}
        
      </head>
      <Navbar/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
