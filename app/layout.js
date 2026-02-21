import { Inter } from "next/font/google";
import "./globals.css";
import MusicPlayer from "./components/MusicPlayer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Asty & Andra Wedding",
  description: "Asty & Andra Wedding",
};

const daftar_tamu = ['Dandi', 'siapa weh']

export default function RootLayout({ children }) {
  // const { slug } = params;

  // const tamuAda = daftarTamu.includes(slug.toLowerCase());

  // if (!tamuAda) {
  // notFound(); // otomatis ke halaman 404
  // }

  return (
    <html lang="id">
      <head>
        <link rel="icon" href="favicon.ico" />
      </head>
      <body id="body" className={`${inter.className} bg-rose-50 text-gray-800`} style={{ overflow: "hidden" }}>
        {children}
        <MusicPlayer />
        <footer className="bg-gradient-to-r from-rose-100 to-amber-50 py-6 text-center text-gray-600">
          <p>Dibuat dengan ❤️ untuk Asty & Andra</p>
          <p className="text-sm mt-2">© 2025 Damel Wedding</p>
        </footer>
      </body>
    </html>
  );
}