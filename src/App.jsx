import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import About from "./components/About";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div className="min-h-screen bg-[#121212] text-white">
            <Navbar />

            <main className="mx-auto max-w-[680px] px-5">
                <Hero />
                <FeaturedProject />
                <About />
                <Contact />
            </main>
        </div>
    );
}