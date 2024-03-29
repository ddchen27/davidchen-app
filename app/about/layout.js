import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "David Chen | About",
  description: "My personal portfolio website.",
};

export default function AboutLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${montserrat.className} font-mont bg-light w-full min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
