import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturedProject from "./components/FeaturedProject";
import Contact from "./components/Contact";
import GithubActivity from "./components/GithubActivity";
import Footer from "./components/Footer";
import Education from "./components/Education";
import Experience from "./components/Experience";
import MailboxPage from "./components/MailboxPage";

import { useEffect, useState } from "react";
import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import Lenis from "lenis";

export default function App() {
    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("portfolio-theme") !== "light";
    });
    const [pendingIsDark, setPendingIsDark] = useState(null);
    const [isCommittingTheme, setIsCommittingTheme] = useState(false);
    const [transitionScrollY, setTransitionScrollY] = useState(0);

    useEffect(() => {
        const lenis = new Lenis({
            autoRaf: true,
        });

        return () => {
            lenis.destroy();
        };
    }, []);

    function toggleTheme() {
        if (pendingIsDark !== null) {
            return;
        }

        const nextIsDark = !isDark;
        const currentScrollY = window.scrollY;

        setTransitionScrollY(currentScrollY);
        setPendingIsDark(nextIsDark);

        window.setTimeout(() => {
            setIsCommittingTheme(true);
            setIsDark(nextIsDark);
            localStorage.setItem("portfolio-theme", nextIsDark ? "dark" : "light");
            window.scrollTo(0, currentScrollY);

            window.setTimeout(() => {
                setPendingIsDark(null);
                setIsCommittingTheme(false);
                window.scrollTo(0, currentScrollY);
            }, 80);
        }, 720);
    }

    return (
        <BrowserRouter>
            <div
                className={`theme-surface min-h-screen text-primary ${isCommittingTheme ? "theme-committing" : ""}`}
                data-theme={isDark ? "dark" : "light"}
            >
                <ThemeContent isDark={isDark} onToggleTheme={toggleTheme} />
            </div>

            {pendingIsDark !== null && (
                <div
                    className="theme-overlay"
                    data-theme={pendingIsDark ? "dark" : "light"}
                    style={{ "--theme-scroll-y": `${transitionScrollY}px` }}
                    aria-hidden="true"
                >
                    <ThemeContent
                        isDark={pendingIsDark}
                        onToggleTheme={toggleTheme}
                        isOverlay
                    />
                </div>
            )}

            <RouteEffects />
        </BrowserRouter>
    );
}

function HomePage({ isDark, disableAnimation = false }) {
    return (
        <>
            <Hero disableAnimation={disableAnimation} />
            <FeaturedProject disableAnimation={disableAnimation} />
            <Education disableAnimation={disableAnimation} />
            <Experience disableAnimation={disableAnimation} />
            <GithubActivity
                isDark={isDark}
                disableAnimation={disableAnimation}
            />
            <Contact disableAnimation={disableAnimation} />
        </>
    );
}

const PAGE_TITLES = {
    "/": "Oliver Tappin — Software Developer",
    "/mailbox": "Mail Box — Oliver Tappin",
};

function RouteEffects() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        document.title = PAGE_TITLES[pathname] ?? PAGE_TITLES["/"];

        if (hash) {
            const target = document.querySelector(hash);

            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
                return;
            }
        }

        window.scrollTo(0, 0);
    }, [pathname, hash]);

    return null;
}

function ThemeContent({ isDark, onToggleTheme, isOverlay = false }) {
    return (
        <>
            <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />

            <main className="mx-auto max-w-[780px] px-5">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <HomePage
                                isDark={isDark}
                                disableAnimation={isOverlay}
                            />
                        }
                    />
                    <Route
                        path="/mailbox"
                        element={<MailboxPage disableAnimation={isOverlay} />}
                    />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>

                <Footer />
            </main>
        </>
    );
}