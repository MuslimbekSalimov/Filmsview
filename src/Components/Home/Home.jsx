import Hero from "./Hero/Hero";
import About from "./About/About";
import New from "./News/News";
import Carusel from "./Carusell/Carusel";

function Home() {
    return (
        <>
        <main>
            <Hero/>
            <About/>
            <New/>
            <Carusel/>
        </main>
        </>
    )
}
export default Home