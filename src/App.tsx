import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { Footer } from "./components/footer/Footer";

export function App () {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </main>
  )
}