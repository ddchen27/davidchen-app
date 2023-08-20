import Head from "next/head";
import Image from "next/image";
// import styles from "./styles/Home.module.css";
import NavBar from "./NavBar";
import Footer from "./Footer";
import Intro from "./Intro";
import HomeLayout from "./HomeLayout";
import profilePic from "../public/images/profile/pic1.png";

export default function Home() {
  return (
    <main>
      <NavBar />
      <div className="flex items-center text-dark w-full">
        <HomeLayout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image src={profilePic} alt="David" className="w-[90%] h-auto" />
            </div>
            <Intro />
          </div>
        </HomeLayout>
      </div>
      <Footer />
    </main>
  );
}
