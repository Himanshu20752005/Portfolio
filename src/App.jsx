import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/navbar.jsx"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased
    selection:bg-cyan-300 ☐
    selection:text-cyan-900">
      
      <div className="fixed top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto pl-3 pr-3 sm:pl-8 sm:pr-8 md:pl-16 md:pr-16 lg:pl-24 lg:pr-24 ">
      <Navbar/>
      <Hero/>
      <About/>
      <Technologies/>
      <Experience/>
      <Projects/>
      <Contact/>
      </div>
       
    </div>
  )
}

export default App
