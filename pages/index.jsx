import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Top } from "../components/Top";
import { Concept } from "../components/Concept";
import { Project } from "../components/Project";
import { Topic } from "../components/Topic";
import { Village } from "../components/Village";
import { Lunch } from "../components/Lunch";
import { Gallery } from "../components/Gallery";
import { Access } from "../components/Access";
import { Join } from "../components/Join";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>むらんち</title>
        <meta
          name="description"
          content="食や地方について楽しく学べるコミュニティ、「むらんち」です。"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header />
        <main>
          <Top />
          <Concept />
          <Project />
          <Topic />
          <Village />
          <Lunch />
          <Gallery />
          <Access />
          <Join />
        </main>
        <Footer />
      </div>
  );
}
