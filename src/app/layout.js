import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "slick-carousel/slick/slick.css";
import "./assets/main.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--body-color-font',
});
const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--heading-font',
});

export const metadata = {
  title: {
    absolute: '',
    default: 'Vers un management durable des systèmes d\'information ?',
    template: '%s | Management & DataScience',
  },
  description: 'Découvrez vers un management durable des systèmes d\'information. Coordonné par Guillaume Biot-Paquerot et Amélie Clauzel. Édité par Management & DataScience.',
  openGraph: {
    title: 'Vers un management durable des systèmes d\'information ?',
    description: 'Découvrez vers un management durable des systèmes d\'information. Coordonné par Guillaume Biot-Paquerot et Amélie Clauzel.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="Themeservices" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${plus_jakarta_sans.variable} ${dm_sans.variable}`}>
        {children}
      </body>
    </html>
  );
}
