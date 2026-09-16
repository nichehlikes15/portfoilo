import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import About from "./components/About";
import Contact from "./components/Contact";
import GithubActivity from "./components/GithubActivity";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function App() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("portfolio-theme") !== "light";
    });
    const [isChangingTheme, setIsChangingTheme] = useState(false);

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    function toggleTheme() {
        const nextIsDark = !isDark;

        setIsDark(nextIsDark);
        setIsChangingTheme(true);
        localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");

        window.setTimeout(() => setIsChangingTheme(false), 450);
    }

    return (
        <div
            className={`theme-surface min-h-screen text-primary ${isChangingTheme ? "theme-changing" : ""}`}
            data-theme={isDark ? "dark" : "light"}
        >
            <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

            <main className="mx-auto max-w-[680px] px-5">
                <Hero />
                <About />
                <FeaturedProject />
                <Contact />
                <GithubActivity isDark={isDark} />
            </main>
        </div>
    );
}