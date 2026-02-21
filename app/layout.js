import { Dancing_Script, Inter } from "next/font/google";
import "./globals.css";
// import MusicPlayer from "./components/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asty & Andra Wedding",
  description: "Asty & Andra Wedding",
};

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-dancing",
});

export default function RootLayout({ children }) {

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body id="body" className={`${inter.className} ${dancingScript.variable} bg-red-50 text-gray-800`} style={{ overflow: "hidden" }}>
        {children}
        <footer className="bg-gradient-to-r from-rose-100 to-amber-50 py-6 text-center text-gray-600">
          <p>Dibuat dengan ❤️ untuk Asty & Andra</p>
          <p className="text-sm mt-2">© 2025 Damel Wedding</p>
        </footer>
      </body>
    </html>
  );
}