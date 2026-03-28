import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Thesis from "./components/Thesis";
import AgenticPDLC from "./components/AgenticPDLC";
import Proof from "./components/Proof";
import Principles from "./components/Principles";
import TheCall from "./components/TheCall";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Thesis />
      <AgenticPDLC />
      <Proof />
      <Principles />
      <TheCall />
      <Footer />
    </main>
  );
}
