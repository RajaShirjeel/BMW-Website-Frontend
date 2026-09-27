import About from "../components/About";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Models from "../components/Models";
import Navbar from "../components/Navbar";

export default function Homepage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Models />
        <About />
      </main>
      <Footer />
    </>
  );
}
