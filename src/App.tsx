import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";

export function App () {
  return (
    <main>
      <Header />
      <Hero />
      <Projects />
      <About />
      <Contact />
    </main>
  )
}