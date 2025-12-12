import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Education from "../components/Education"
import Projects from "../components/Projects"
import Services from "../components/Services"
import Contact from "../components/Contact"
import BacktoTopButton from "../components/BacktoTopButton"
const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Education />
            <Services />
            <Contact />
            <BacktoTopButton />
        </>
    )
}
export default Home