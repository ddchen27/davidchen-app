import Head from "next/head";
import Image from "next/image";
// import styles from "./styles/Home.module.css";
import NavBar from "./NavBar";
import IntroCard from "./IntroCard"


export default function Home() {
  return (
    <main>
      <NavBar />
      <IntroCard />
    </main>
  );
}
